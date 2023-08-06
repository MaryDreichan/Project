import React, { useState } from 'react';
import WordCard from './WordCard';
import styles from './wordList.module.scss';

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
    <div className={styles.wordList}>
      <button onClick={handlePrevWord} className={styles.arrowButton}>←</button>
      <WordCard word={currentWord.word} translation={currentWord.translation} />
      <button onClick={handleNextWord} className={styles.arrowButton}>→</button>
    </div>
  );
}

export default WordList;