"use client";

import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function TypewriterText(): React.ReactElement {
  const [text] = useTypewriter({
    words: ["Lab Tested", "South Korean", "Clean Waters"],
    loop: true, // Optional config    
    typeSpeed: 40,
    deleteSpeed: 40,
  });

  return (
    <div className="flex flex-col items-center space-y-2">
      {/* Dynamic Text with Background */}
      <div className="p-2 rounded-lg text-4xl font-bold text-center text-yellow-500">
        {text}
        <Cursor />
      </div>
    </div>
  );
}
