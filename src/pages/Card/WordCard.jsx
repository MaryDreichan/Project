import React, { useEffect, useState } from 'react';
import st from './wordCard.module.scss';

function WordCard({ word, translation }) {
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    setShowTranslation(false);
  }, [word]);

  const handleShowTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className={st["word-card"]}>
      <h3>{showTranslation ? translation : word}</h3>
      <button onClick={handleShowTranslation}>
        {showTranslation ? 'Скрыть перевод' : 'Показать перевод'}
      </button>
    </div>
  );
}

export default WordCard;