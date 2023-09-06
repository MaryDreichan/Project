import React from "react";
import styles from "./wordTable.module.scss";

function WordTable({ wordsData }) {
    return (
      <table className={styles["word-table"]}>
        <thead>
          <tr>
            <th>Слово</th>
            <th>Перевод</th>
          </tr>
        </thead>
        <tbody>
          {wordsData.map((word, index) => (
            <tr key={index}>
              <td>{word.word}</td>
              <td>{word.translation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default WordTable;