'use client'
import { useState, useEffect } from 'react';

const RotatingText = ({ words = [], typingSpeed = 100, erasingSpeed = 50, delay = 1000 }) => {
  const [currentWord, setCurrentWord] = useState('');
  const [isErasing, setIsErasing] = useState(false);
  const [loopCounter, setLoopCounter] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentLetter, setCurrentLetter] = useState('');

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopCounter % words.length;
      const fullWord = words[currentIndex];

      if (isErasing) {
        if (charIndex > 0) {
          setCurrentLetter(fullWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsErasing(false);
          setLoopCounter(loopCounter + 1);
        }
      } else {
        if (charIndex < fullWord.length) {
          setCurrentLetter(fullWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsErasing(true), delay);
        }
      }
    };

    const typingTimeout = setTimeout(
      handleTyping,
      isErasing ? erasingSpeed : typingSpeed
    );

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isErasing, loopCounter, words, typingSpeed, erasingSpeed, delay]);

  return ( <span className="inline-block" style={{minHeight: '1.5rem'}} > {currentLetter} </span> );
};

export default RotatingText;
