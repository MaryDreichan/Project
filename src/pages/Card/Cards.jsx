import React, { useState, useEffect } from 'react';
import WordCard from './WordCard';
import styles from './cards.module.scss';
import { useWordContext } from './WordContex';

function Cards() {
  const wordsData = useWordContext();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [learnedWordsCount, setLearnedWordsCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (wordsData && wordsData.length > 0) {
      setLoading(false);
    }
  }, [wordsData]);

  const handleNextWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex === wordsData.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? wordsData.length - 1 : prevIndex - 1));
  };

  const handleIncrementCount = () => {
    setLearnedWordsCount((prevCount) => prevCount + 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (wordsData.length > 0 && currentIndex >= 0 && currentIndex < wordsData.length) {
    return (
      <div className={styles.card}>
        <div className={styles['cards-container']}>
          <button onClick={handlePrevWord} className={styles.arrowButton}>←</button>
          <WordCard
            word={wordsData[currentIndex].word}
            translation={wordsData[currentIndex].translation}
            onShowTranslation={handleIncrementCount} 
          />
          <button onClick={handleNextWord} className={styles.arrowButton}>→</button>
        </div>
        <div className={styles['learned-words-container']}>
          <p className={`${styles['learned-words']} learned-words`}>Изучено слов: {learnedWordsCount}</p>
        </div>
      </div>
    );
  } else {
    return <p>Слова не найдены или произошла ошибка при загрузке данных.</p>;
  }
}

export default Cards;