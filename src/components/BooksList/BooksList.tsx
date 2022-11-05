import { Link } from "react-router-dom";
import BookImage from "../../resources/images/book1.png";
import { IBook } from "../../interfaces/book.interface";

import styles from "./BooksList.module.css";

interface BookProps {
  items: IBook[];
}

const BooksList: React.FC<BookProps> = ({ items }) => {
  return (
    <div className={styles.booksContainer}>
      {items.map((item: IBook, index: number) => (
        <Link
          className={styles.bookCard}
          to={`/corporate-library/book/${index}`}
          state={item}
          key={index + item.title}
        >
          <h4 className={styles.bookText}>{item.author}</h4>
          <img className={styles.bookImage} src={BookImage} alt="book" />
          <h4 className={styles.bookText}>{item.title}</h4>
        </Link>
      ))}
    </div>
  );
};

export default BooksList;
