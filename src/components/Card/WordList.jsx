import React, { useState } from 'react';
import WordCard from './WordCard';

function WordList({ words }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? words.length - 1 : prevIndex - 1));
  };

  const currentWord = words[currentIndex];

  return (
    <div>
      <WordCard word={currentWord.word} translation={currentWord.translation} />
      <div>
        <button onClick={handlePrevWord}>Предыдущее слово</button>
        <button onClick={handleNextWord}>Следующее слово</button>
      </div>
    </div>
  );
}

export default WordList;