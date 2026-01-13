'use client';

import { useState, useEffect } from 'react';
import { HangmanWord, HangmanGameState } from '@/app/types/hangman';
import wordsList from '@/app/words/words.json';

const MAX_MISTAKES = 6;

const getRandomWord = (): HangmanWord => {
  const initialWord = wordsList[0];
  return {
    word: initialWord.word.toUpperCase(),
    hint: initialWord.hint,
    category: initialWord.category
  };
};

export default function HangmanGame({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [currentScore, setCurrentScore] = useState(0);
  const [gameState, setGameState] = useState<HangmanGameState>(() => ({
    currentWord: getRandomWord(),
    guessedLetters: [],
    mistakes: 0,
    gameStatus: 'playing'
  }));

  const getNextWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsList.length);
    const word = wordsList[randomIndex];
    return {
      word: word.word.toUpperCase(),
      hint: word.hint,
      category: word.category
    };
  };

  const handleGuess = (letter: string) => {
    if (gameState.guessedLetters.includes(letter)) return;
    
    const newGuessedLetters = [...gameState.guessedLetters, letter];
    const isWrong = !gameState.currentWord.word.includes(letter);
    const newMistakes = isWrong ? gameState.mistakes + 1 : gameState.mistakes;
    
    const isWon = gameState.currentWord.word
      .split('')
      .every(char => newGuessedLetters.includes(char));
    
    if (isWon) {
      setCurrentScore(currentScore + 1);
    }

    setGameState({
      ...gameState,
      guessedLetters: newGuessedLetters,
      mistakes: newMistakes,
      gameStatus: isWon ? 'won' : newMistakes >= MAX_MISTAKES ? 'lost' : 'playing'
    });
  };

  if (!isOpen) return null;

  return (
    <div role="dialog" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg max-w-lg w-full text-gray-900 dark:text-gray-100">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Hangman Game</h2>
          <button onClick={onClose} className="text-2xl hover:text-gray-600 dark:hover:text-gray-300">&times;</button>
        </div>
        
        <div className="mb-4">
          <p>Category: {gameState.currentWord.category}</p>
          <p>Hint: {gameState.currentWord.hint}</p>
        </div>

        {/* Display word with blanks */}
        <div className="mb-4 text-center text-2xl">
          {gameState.currentWord.word.split('').map((letter, index) => (
            <span key={index} className="mx-1">
              {gameState.guessedLetters.includes(letter) ? letter : '_'}
            </span>
          ))}
        </div>

        {/* Keyboard */}
        <div className="grid grid-cols-7 gap-1">
          {'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*'
            .split('')
            .map((letter) => (
            <button
              key={letter}
              onClick={() => handleGuess(letter)}
              disabled={gameState.guessedLetters.includes(letter)}
              className={`p-2 border rounded dark:border-gray-600 ${
                gameState.guessedLetters.includes(letter) 
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Game status */}
        <div className="mt-4">
          <p>Mistakes: {gameState.mistakes} / {MAX_MISTAKES}</p>
          <p>Your score: {currentScore}</p>
          {gameState.gameStatus !== 'playing' && (
            <div className="text-center mt-4">
              <p>
                {gameState.gameStatus === 'won' 
                  ? 
                  <>
                      Congratulations! Score: {currentScore}
                    </> 
                  : 'Game Over!'}
              </p>
              {gameState.gameStatus === 'lost' && (
                <p className="mt-2 text-red-600 dark:text-red-400">
                  The word was: {gameState.currentWord.word}<br/>
                  Your score: {currentScore}
                </p>
              )}
              <button 
                onClick={() => {
                  if (gameState.gameStatus === 'lost') {
                    setCurrentScore(0);
                  }
                  setGameState({
                    currentWord: getNextWord(),
                    guessedLetters: [],
                    mistakes: 0,
                    gameStatus: 'playing'
                  });
                }}
                className="mt-2 bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 