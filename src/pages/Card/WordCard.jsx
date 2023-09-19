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

  const isWordEmpty = word.trim() === "";
  const isTranslationEmpty = translation.trim() === "";

  return (
    <div className={`${st["word-card"]} ${isWordEmpty || isTranslationEmpty ? "empty-field" : ""}`}>
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