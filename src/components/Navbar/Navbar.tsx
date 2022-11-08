import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <Link to="/corporate-library">
          <h2>Корпоративная библиотека</h2>
        </Link>
        <nav>
          <ul className={styles.navigation}>
            <li className={styles.menuItem}>
              <Link className={styles.menuText} to="/corporate-library">
                Главная
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link className={styles.menuText} to="/corporate-library/news">
                Новости библиотеки
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link className={styles.menuText} to="/corporate-library/team">
                Сотрудники библиотеки
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link className={styles.menuText} to="/corporate-library/events">
                Мероприятия библиотеки
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
