import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <h1>Корпоративная библиотека</h1>
      <nav>
        <ul className={styles.navigation}>
          <li className={styles.menuItem}>
            <Link className={styles.menuText} to="/">
              Главная
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.menuText} to="/news">
              Новости библиотеки
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.menuText} to="/team">
              Сотрудники библиотеки
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.menuText} to="/events">
              Мероприятия библиотеки
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
