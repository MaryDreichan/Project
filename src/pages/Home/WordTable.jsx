import React, { useState } from "react";
import styles from "./wordTable.module.scss";

function WordTable({ wordsData }) {
  const [isEmptyField, setIsEmptyField] = useState(false);
  const [errors, setErrors] = useState(Array(wordsData.length).fill(false));

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedWordsData = [...wordsData];

    if (name === "word") {
      const isValidWord = /^[a-zA-Z]+$/.test(value);
      if (!isValidWord) {
        return;
      }
    } else if (name === "translation") {
      const isValidTranslation = /^[а-яА-ЯёЁ]+$/.test(value);
      if (!isValidTranslation) {
        return;
      }
    }

    updatedWordsData[index][name] = value;
    const hasEmptyField = updatedWordsData.some(
      (word) => word.word.trim() === "" || word.translation.trim() === ""
    );
    setIsEmptyField(hasEmptyField);
  };

  const validateRow = (index) => {
    const word = wordsData[index].word;
    const translation = wordsData[index].translation;
    const isWordEmpty = word.trim() === "";
    const isTranslationEmpty = translation.trim() === "";

    if (isWordEmpty || isTranslationEmpty) {
      const newErrors = [...errors];
      newErrors[index] = true;
      setErrors(newErrors);
      return false;
    } else {
      const newErrors = [...errors];
      newErrors[index] = false;
      setErrors(newErrors);
      return true;
    }
  };

  const handleSaveChanges = (index) => {
    if (validateRow(index)) {
      console.log("Сохранение изменений для строки", index);
      console.log("Слово:", wordsData[index].word);
      console.log("Перевод:", wordsData[index].translation);
    } else {
      alert("Пожалуйста, заполните все поля корректно.");
    }
  };

  return (
    <table className={styles["word-table"]}>
      <thead>
        <tr>
          <th>Слово</th>
          <th>Перевод</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {wordsData.map((word, index) => (
          <tr key={index}>
            <td>
              <input
                type="text"
                name="word"
                value={word.word}
                onChange={(e) => handleInputChange(e, index)}
                className={errors[index] ? styles["empty-field"] : ""}
              />
            </td>
            <td>
              <input
                type="text"
                name="translation"
                value={word.translation}
                onChange={(e) => handleInputChange(e, index)}
                className={errors[index] ? styles["empty-field"] : ""}
              />
            </td>
            <td>
              <button onClick={() => handleSaveChanges(index)}>Сохранить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default WordTable;