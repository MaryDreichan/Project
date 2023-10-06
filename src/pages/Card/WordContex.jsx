import React, { createContext, useContext, useEffect, useState } from "react";

const WordContext = createContext();

export function useWordContext() {
  return useContext(WordContext);
}

export function WordProvider({ children }) {
  const [words, setWords] = useState([]);

  async function fetchWords(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWords(data);
    } catch (error) {
      console.error("Ошибка при загрузке слов из API:", error);
    }
  }

  async function addWord(url, newWord) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWord),
      });

      if (response.ok) {
        const createdWord = await response.json();
        setWords((prevWords) => [...prevWords, createdWord]);
        console.log("Добавление нового слова успешно.");
      } else {
        console.error("Ошибка при добавлении нового слова:", response.statusText);
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  }

  async function deleteWord(url, id) {
    try {
      const response = await fetch(`${url}/${id}/delete`, {
        method: "POST",
      });

      if (response.ok) {
        setWords((prevWords) => prevWords.filter((word) => word.id !== id));
        console.log("Удаление слова успешно.");
      } else {
        console.error("Ошибка при удалении слова:", response.statusText);
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  }

  useEffect(() => {
    fetchWords("http://itgirlschool.justmakeit.ru/api/words");
  }, []);

  return (
    <WordContext.Provider value={{ words, addWord, deleteWord }}>
      {children}
    </WordContext.Provider>
  );
}
