import React, { useState } from 'react';

function CardTrainer({ wordsData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === wordsData.length - 1 ? 0 : prevIndex + 1));
    setShowTranslation(false);
  };

  const handleToggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div>
      <div className="card">
        <h3>{showTranslation ? wordsData[currentIndex].translation : wordsData[currentIndex].word}</h3>
        <button onClick={handleToggleTranslation}>
          {showTranslation ? 'Скрыть перевод' : 'Показать перевод'}
        </button>
      </div>
      <button onClick={handleNextCard}>Следующая карточка</button>
    </div>
  );
}

export default CardTrainer;