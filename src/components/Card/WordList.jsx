import React from 'react';

function WordList({ words, currentIndex, handleNextWord, handlePrevWord }) {
  const currentWord = words[currentIndex];

  return (
    <div>
      <button onClick={handlePrevWord} className="arrowButton">←</button>
      <h3>{currentWord.word}</h3>
      <button onClick={handleNextWord} className="arrowButton">→</button>
    </div>
  );
}

export default WordList;