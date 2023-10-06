import React, { useEffect, useState, useRef } from 'react';
import st from './wordCard.module.scss';
import { useWordContext } from './WordContex';

const WordCard = ({ word, translation, onShowTranslation }) => {
  const { words } = useWordContext(); 

  const [showTranslation, setShowTranslation] = useState(false);
  const showTranslationButtonRef = useRef(null);

  useEffect(() => {
    setShowTranslation(false);
    showTranslationButtonRef.current.focus();
  }, [words]);

  if (!words || words.length === 0) {
    return null;
  }

  const currentWord = words[0];

  const isWordEmpty = currentWord ? currentWord.word?.trim() === "" : true;
  const isTranslationEmpty = currentWord ? currentWord.translation?.trim() === "" : true;

  const handleShowTranslation = () => {
    setShowTranslation(!showTranslation);
    if (!showTranslation) {
      onShowTranslation();
    }
  };

  return (
    <div className={`${st["word-card"]} ${isWordEmpty || isTranslationEmpty ? "empty-field" : ""}`}>
      <h3>{showTranslation && translation ? translation : word ? word : ""}</h3>
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
