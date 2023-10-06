import React, { Component } from "react";
import styles from "./wordTable.module.scss";
import ErrorComponent from '../Card/ErrorComponent'; 
import { useWordContext } from "../Card/WordContex";

class WordTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsData: [],
      isEmptyField: false,
      errors: [],
      isLoading: true,
      newWord: "",
      newTranslation: "",
    };
  }

  componentDidMount() {
    this.fetchWordsData();
  }

  fetchWordsData = async () => {
    try {
      const response = await fetch("/api/words"); 
      const data = await response.json();
      this.setState({
        wordsData: data,
        isLoading: false,
        errors: Array(data.length).fill(false),
      });
    } catch (error) {
      console.error("Ошибка при загрузке слов из API:", error);
      this.setState({ isLoading: false });
    }
  };

  handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedWordsData = [...this.state.wordsData];
  
    if (name === "word") {
      const isValidWord = /^[a-zA-Z]+$/.test(value);
      if (!isValidWord) {
        return;
      }
      updatedWordsData[index].word = value; 
    } else if (name === "translation") {
      const isValidTranslation = /^[а-яА-ЯёЁ]+$/.test(value);
      if (!isValidTranslation) {
        return;
      }
      updatedWordsData[index].translation = value; 
    }
  
    const hasEmptyField = updatedWordsData.some(
      (word) => word.word.trim() === "" || word.translation.trim() === ""
    );
    this.setState({ wordsData: updatedWordsData, isEmptyField: hasEmptyField });
  };
  
  validateRow = (index) => {
    const word = this.state.wordsData[index].word;
    const translation = this.state.wordsData[index].translation;
    const isWordEmpty = word.trim() === "";
    const isTranslationEmpty = translation.trim() === "";

    if (isWordEmpty || isTranslationEmpty) {
      const newErrors = [...this.state.errors];
      newErrors[index] = true;
      this.setState({ errors: newErrors });
      return false;
    } else {
      const newErrors = [...this.state.errors];
      newErrors[index] = false;
      this.setState({ errors: newErrors });
      return true;
    }
  };

  handleSaveChanges = async (index) => {
    if (this.validateRow(index)) {
      try {
        const updatedWord = this.state.wordsData[index];
        const response = await fetch(`/api/words/${updatedWord.id}/update`, { 
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedWord),
        });

        if (response.ok) {
          const updatedData = await response.json();
          this.setState({
            wordsData: updatedData,
          });
          console.log("Сохранение изменений для слова успешно.");
        } else {
          console.error("Ошибка при сохранении изменений:", response.statusText);
        }
      } catch (error) {
        console.error("Ошибка при отправке запроса:", error);
      }
    } else {
      alert("Пожалуйста, заполните все поля корректно.");
    }
  };

  handleAddWord = async () => {
    try {
      const newWord = {
        english: this.state.newWord,
        russian: this.state.newTranslation,
      };
      const response = await fetch("/api/words/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWord),
      });      

      if (response.ok) {
        const createdWord = await response.json();
        const updatedWordsData = [...this.state.wordsData, createdWord];
        this.setState({
          wordsData: updatedWordsData,
          newWord: "",
          newTranslation: "",
        });
        console.log("Добавление нового слова успешно.");
      } else {
        console.error("Ошибка при добавлении нового слова:", response.statusText);
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  handleDeleteWord = async (index) => {
    const wordToDelete = this.state.wordsData[index];
    if (!window.confirm(`Вы уверены, что хотите удалить слово "${wordToDelete.word}"?`)) {
      return;
    }
  
    try {
      const response = await fetch(`/api/words/${wordToDelete.id}/delete`, { 
        method: "POST",
      });
  
      if (response.ok) {
        const updatedWordsData = this.state.wordsData.filter((word) => word.id !== wordToDelete.id);
        this.setState({
          wordsData: updatedWordsData,
        });
        console.log("Удаление слова успешно.");
      } else {
        console.error("Ошибка при удалении слова:", response.statusText);
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  handleNewWordChange = (event) => {
    this.setState({ newWord: event.target.value });
  };

  handleNewTranslationChange = (event) => {
    this.setState({ newTranslation: event.target.value });
  };

  render() {
    const { wordsData, isLoading, errors, newWord, newTranslation } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

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
                  value={word.english}
                  onChange={(e) => this.handleInputChange(e, index)}
                  className={errors[index] ? styles["empty-field"] : ""}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="translation"
                  value={word.russian}
                  onChange={(e) => this.handleInputChange(e, index)}
                  className={errors[index] ? styles["empty-field"] : ""}
                />
              </td>
              <td>
                <button onClick={() => this.handleSaveChanges(index)}>Сохранить</button>
                <button onClick={() => this.handleDeleteWord(index)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <input
                type="text"
                name="newWord"
                placeholder="Новое слово"
                value={newWord}
                onChange={this.handleNewWordChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="newTranslation"
                placeholder="Перевод"
                value={newTranslation}
                onChange={this.handleNewTranslationChange}
              />
            </td>
            <td>
              <button onClick={this.handleAddWord}>Добавить</button>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default WordTable;
