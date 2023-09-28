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
            <Route path="/" element={<Home />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/game/" element={<CardTrainer />} />
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

