import React, { useState } from 'react';
import WordCard from './WordCard';
import styles from './cards.module.scss';

import CardTrainer from './CardTrainer';

function Cards({ wordsData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex === wordsData.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? wordsData.length - 1 : prevIndex - 1));
  };

  return (
    <div className={styles.card}>
      <button onClick={handlePrevWord} className={styles.arrowButton}>←</button>
      <WordCard word={wordsData[currentIndex].word} translation={wordsData[currentIndex].translation} />
      <button onClick={handleNextWord} className={styles.arrowButton}>→</button>
    </div>
  );
}

export default Cards;