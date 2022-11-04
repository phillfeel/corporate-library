import react from "react";
import { Link } from "react-router-dom";
import BookImage from "../../resources/images/book1.png";
import { BookInterface } from "../../interfaces/book.interface";

import styles from "./Books.module.css";

interface BookProps {
  items: BookInterface[];
}

const Books: React.FC<BookProps> = ({ items }) => {
  return (
    <div className={styles.booksContainer}>
      {items.map((item: BookInterface, index: number) => (
        <div className={styles.bookCard} key={index + item.title}>
          <Link to={`/book/${index}`} state={item}>
            <h4 className={styles.bookText}>{item.author}</h4>
            <img className={styles.bookImage} src={BookImage} alt="book" />
            <h4 className={styles.bookText}>{item.title}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Books;
