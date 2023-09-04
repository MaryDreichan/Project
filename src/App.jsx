import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Card/Cards";
import Menu from "./components/Menu/Menu";
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
    <Router>
      <div className="container">
        <header>
          <Menu />
          <Header />
        </header>
        <main>
        <Routes>
          <Route path="/" element={<Home wordsData={wordsData} />} />
          <Route path="/cards" element={<Cards wordsData={wordsData} />} />
        </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}


export default App;