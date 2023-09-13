import React, { useState } from 'react';
import WordCard from './WordCard';
import styles from './cards.module.scss';

import CardTrainer from './CardTrainer';

function Cards({ wordsData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [learnedWordsCount, setLearnedWordsCount] = useState(0);

  const handleNextWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex === wordsData.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? wordsData.length - 1 : prevIndex - 1));
  };

  const handleIncrementCount = () => {
    setLearnedWordsCount((prevCount) => prevCount + 1);
  };

  return (
    <div className={styles.card}>
      <div className={styles["cards-container"]}>
        <button onClick={handlePrevWord} className={styles.arrowButton}>←</button>
        <WordCard
          word={wordsData[currentIndex].word}
          translation={wordsData[currentIndex].translation}
          onShowTranslation={handleIncrementCount} 
        />
        <button onClick={handleNextWord} className={styles.arrowButton}>→</button>
      </div>
      <div className={styles["learned-words-container"]}>
        <p className={`${styles["learned-words"]} learned-words`}>Изучено слов: {learnedWordsCount}</p>
      </div>
    </div>
  );
}

export default Cards;