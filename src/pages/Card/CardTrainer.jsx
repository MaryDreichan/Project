import React, { useState, useEffect } from 'react';
import st from './cardTrainer.module.scss';
import { useWordContext } from './WordContex';

function CardTrainer() {
  const { words } = useWordContext();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [stats, setStats] = useState({
    correctAnswers: 0,
    incorrectAnswers: 0,
  });

  useEffect(() => {
    if (words.length > 0) {
      setCurrentIndex(0);
    }
  }, [words]);

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
    setUserAnswer('');
  };

  const handleAnswer = () => {
    if (words.length === 0) {
      return;
    }

    const isCorrect = userAnswer.trim().toLowerCase() === words[currentIndex].word.toLowerCase();
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

  if (words.length === 0) {
    return <div>No data available</div>;
  }

  const currentWord = words[currentIndex];

  return (
    <div className={st["card-trainer-container"]}>
      <div className={st["card"]}>
        <h3>{currentWord.translation}</h3>
      </div>
      <div className={st["answer"]}>
        <input
          type="text"
          placeholder="Как по-английски?"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button onClick={handleAnswer}>Ответить</button>
      </div>
      <div className={st["stats"]}>
        <p>Правильные ответы: {stats.correctAnswers}</p>
        <p>Неправильные ответы: {stats.incorrectAnswers}</p>
      </div>
    </div>
  );
}

export default CardTrainer;
