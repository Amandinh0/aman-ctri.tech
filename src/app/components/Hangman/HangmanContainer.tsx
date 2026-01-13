'use client';

import { useState } from 'react';
import HangmanGame from './HangmanGame';

export default function HangmanContainer() {
  const [isHangmanOpen, setIsHangmanOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button 
        onClick={() => setIsHangmanOpen(true)}
        className="custom-text text-lg font-bold px-20 rounded hover:scale-110 transition-transform border-2 border-gray-600 shadow-sm bg-slate-800 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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