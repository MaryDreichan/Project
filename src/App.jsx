import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cards from "./pages/Card/Cards";
import Menu from "./components/Menu/Menu";
import NotFound from "./pages/NotFound/NotFound";
import './style/App.scss';
import './style/vars.scss';
import './style/template.scss';
import './style/index.scss';
import CardTrainer from "./pages/Card/CardTrainer";

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
            <Route path="/game/" element={<CardTrainer wordsData={wordsData} />} />
            <Route path="*" element={<NotFound />} />
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