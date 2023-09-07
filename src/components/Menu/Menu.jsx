import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo1.jpeg";
import styles from './menu.module.scss';

function Menu() {
  return (
    <nav className={styles.menu}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Логотип" />
        </Link>
      </div>
      <ul className={styles["menu-list"]}>
        <li>
          <Link to="/" className={styles.menuLink}>Главная</Link>
        </li>
        <li>
          <Link to="/cards" className={styles.menuLink}>Страница с карточками</Link>
        </li>
        <li>
          <Link to="/game" className={styles.menuLink}>Игра</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;