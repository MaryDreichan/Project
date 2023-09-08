import React, { useState } from 'react';
import './cardTrainer.module.scss';

function CardTrainer({ wordsData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [stats, setStats] = useState({
    correctAnswers: 0,
    incorrectAnswers: 0,
  });

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === wordsData.length - 1 ? 0 : prevIndex + 1));
    setUserAnswer('');
  };

  const handleAnswer = () => {
    const isCorrect = userAnswer.trim().toLowerCase() === wordsData[currentIndex].word.toLowerCase();
    if (isCorrect) {
      setStats((prevStats) => ({
        ...prevStats,
        correctAnswers: prevStats.correctAnswers + 1,
      }));
    } else {
      setStats((prevStats) => ({
        ...prevStats,
        incorrectAnswers: prevStats.incorrectAnswers + 1,
      }));
    }
    handleNextCard();
  };

  return (
    <div className="card-trainer-container">
      <div className="card">
        <h3>{wordsData[currentIndex].translation}</h3>
      </div>
      <div className="answer">
        <input
          type="text"
          placeholder="Как по-английски?"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button onClick={handleAnswer}>Ответить</button>
      </div>
      <div className="stats">
        <p>Правильные ответы: {stats.correctAnswers}</p>
        <p>Неправильные ответы: {stats.incorrectAnswers}</p>
      </div>
    </div>
  );
}

export default CardTrainer;