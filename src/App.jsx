import React from "react";
import Home from "./components/pages/Home/Home";
import Slider from "./components/pages/Slider/Slider";
import Table from "./components/pages/Table/Table"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
//import Card from "./components/Card/Card";
import WordList from "./components/Card/WordList";
import './style/App.scss';

const wordsData = [
  { word: 'Stork', translation: 'Аист' },
  { word: 'Apple', translation: 'Яблоко' },
  { word: 'Car', translation: 'Машина' },
  { word: 'House', translation: 'Дом' },
  { word: 'Book', translation: 'Книга' },
  { word: 'Sun', translation: 'Солнце' },
  { word: 'Tree', translation: 'Дерево' },
  { word: 'Water', translation: 'Вода' },
  { word: 'Dog', translation: 'Собака' },
  { word: 'Cat', translation: 'Кошка' },
  { word: 'Chair', translation: 'Стул' },
  { word: 'Table', translation: 'Стол' },
  { word: 'Computer', translation: 'Компьютер' },
  { word: 'Phone', translation: 'Телефон' },
  { word: 'Pen', translation: 'Ручка' },
];



function App() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <WordList words={wordsData} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;