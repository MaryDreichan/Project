import React, { useState, useEffect } from 'react';
import st from './cardTrainer.module.scss';
import { useWordContext } from './WordContex';

function CardTrainer() {
  const wordsData = useWordContext();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [stats, setStats] = useState({
    correctAnswers: 0,
    incorrectAnswers: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
        const data = await response.json();
        setIsLoading(false);
      } catch (error) {
        console.error("Ошибка при загрузке слов из API:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!wordsData || wordsData.length === 0) {
    return <div>No data available</div>;
  }

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
    <div className={st["card-trainer-container"]}>
      <div className={st["card"]}>
        <h3>{wordsData[currentIndex].translation}</h3>
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