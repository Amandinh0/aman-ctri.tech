'use client';

import { useState } from 'react';
import HangmanGame from './HangmanGame';

export default function HangmanContainer() {
  const [isHangmanOpen, setIsHangmanOpen] = useState(false);

  return (
    <div className="flex flex-col items-center mt-2">
      <button 
        onClick={() => setIsHangmanOpen(true)}
        className="custom-text text-lg font-bold px-20 rounded hover:scale-110 transition-transform border-2 border-gray-300 shadow-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        SWE Hangman
      </button>

      <HangmanGame 
        isOpen={isHangmanOpen} 
        onClose={() => setIsHangmanOpen(false)} 
      />
    </div>
  );
} 