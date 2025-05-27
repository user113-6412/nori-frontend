'use client';

import { useState } from 'react';

interface VideoPlayerProps {
    videoURL: string;
}

export default function VideoPlayer({ videoURL }: VideoPlayerProps) {
    const [isMuted, setIsMuted] = useState(true);

    return (
        <div className="relative">
            <video 
                src={videoURL} 
                autoPlay 
                muted={isMuted}
                loop 
                playsInline
                className='w-full h-auto rounded-lg border-2 border-yellow-500'
            />
            <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-2 left-2 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all"
            >
                {isMuted ? (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                )}
            </button>
        </div>
    );
} 