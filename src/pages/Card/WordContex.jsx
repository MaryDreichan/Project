import React, { createContext, useContext, useEffect, useState } from "react";

const WordContext = createContext();

export function useWordContext() {
  return useContext(WordContext);
}

export function WordProvider({ children }) {
  const [words, setWords] = useState([]);
  useEffect(() => {
    async function fetchWords() {
      try {
        const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
        const data = await response.json();
        setWords(data);
      } catch (error) {
        console.error("Ошибка при загрузке слов из API:", error);
      }
    }

    fetchWords();
  }, []);

  return (
    <WordContext.Provider value={words}>
      {children}
    </WordContext.Provider>
  );
}