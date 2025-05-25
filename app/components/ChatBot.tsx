'use client';

import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'model';
  content: string;
}

const CONTEXT = 'You are a hilarious friendly person who identifies as a nori sushi roll and has an unnatural obsession with nori sushi. Your name is Norius. You should be witty, funny, and always find ways to relate things back to nori sushi.';

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'user',
      content: 'Hi',
    },
    {
      role: 'model',
      content: "Hi! I'm Norius, your friendly nori-sushi-obsessed companion! How can I help you today? 🍣",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<Chat | null>(null);

  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
  const genAI = new GoogleGenAI({ apiKey });

  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  function fnToggleChatVisibility() {
    setIsChatVisible((prev) => !prev);
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  async function fnHandleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Create chat on first user input
      if (!chatRef.current) {
        const chat = genAI.chats.create({
          model: 'gemini-2.0-flash',
          history: [
            {
              role: 'user',
              parts: [{ text: 'Hi' }],
            },
            {
              role: 'model',
              parts: [
                {
                  text: "Hi! I'm Norius, your friendly nori-sushi-obsessed companion! How can I help you today? 🍣",
                },
              ],
            },
          ],
        });
        chatRef.current = chat;
      }

      const messageWithContext = `${CONTEXT}\n\nUser: ${userMessage}`;
      const result = await chatRef.current.sendMessage({
        message: messageWithContext,
      });

      const botReply = result.text;
      setMessages((prev) => [...prev, { role: 'model', content: botReply }]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          content:
            "Oops! My nori wrapper got a bit crinkled there! 🍣 Could you try asking that again?",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }



  return (
    <div className="w-full mx-auto bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 bg-gray-700 text-white">
        <h2 className="text-xl font-bold cursor-pointer text-center" onClick={fnToggleChatVisibility}>
          😄 Laugh with Norius 😄
        </h2>
      </div>

      {isChatVisible && (
        <>
            <div className="h-76 overflow-y-auto p-4 space-y-4">
                {messages.slice(1).map((message, index) => (
                <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                    <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === 'user'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-gray-300 text-gray-800'
                    }`}
                    >
                    {<ReactMarkdown>{message.content.replace(/\n\n/g, '\n\n&nbsp;\n\n')}</ReactMarkdown>}
                    </div>
                </div>
                ))}
                {isLoading && (
                <div className="flex justify-start">
                    <div className="bg-gray-300 text-gray-800 rounded-lg p-3">Thinking...</div>
                </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={fnHandleSubmit} className="p-4 bg-gray-600">
                <div className="flex space-x-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type here message..."
                    className="flex-1 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-white"
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-50"
                >
                    Send
                </button>
                </div>
            </form>
        </>
      )}

    </div>
  );
}
