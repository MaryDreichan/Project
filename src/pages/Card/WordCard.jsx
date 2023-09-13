import React, { useEffect, useState, useRef } from 'react';
import st from './wordCard.module.scss';

const WordCard = ({ word, translation, onShowTranslation }) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const showTranslationButtonRef = useRef(null);

  useEffect(() => {
    setShowTranslation(false);
    showTranslationButtonRef.current.focus();
  }, [word]);

  const handleShowTranslation = () => {
    setShowTranslation(!showTranslation);
    if (!showTranslation) {
      onShowTranslation();
    }
  };

  return (
    <div className={st["word-card"]}>
      <h3>{showTranslation ? translation : word}</h3>
      <button
        ref={showTranslationButtonRef}
        onClick={handleShowTranslation}
      >
        {showTranslation ? 'Скрыть перевод' : 'Показать перевод'}
      </button>
    </div>
  );
}

export default WordCard;