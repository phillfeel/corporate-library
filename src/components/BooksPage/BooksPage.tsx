import React, { useEffect, useState } from "react";
import data from "../../fixtures/books.json";
import { IBook } from "../../interfaces/book.interface";
import BooksList from "../BooksList/BooksList";

import styles from "./BooksPage.module.css";

enum SearchCategoryEnum {
  title = "TITLE",
  author = "AUTHOR",
}

const BooksPage: React.FC = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [searchCategory, setSearchCategory] = useState<SearchCategoryEnum>(
    SearchCategoryEnum.title
  );
  const [searchText, setSearchText] = useState<string>("");

  const PLACEHOLDER_TEXT =
    searchCategory === SearchCategoryEnum.author
      ? "Введите автора..."
      : "Введите название...";

  useEffect(() => {
    const libraryBooks: IBook[] = data;
    setBooks(libraryBooks);
  }, []);

  const selectHandleChange = (e: React.SyntheticEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    setSearchCategory(target.value as SearchCategoryEnum);
  };

  const searchHandleChange = (e: React.SyntheticEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    setSearchText(target.value);
  };

  const filterBySearch = (entities: IBook[], search: string) =>
    entities.filter((item) => {
      if (searchCategory === SearchCategoryEnum.title) {
        return item.title.toLowerCase().includes(search.toLocaleLowerCase());
      }
      if (searchCategory === SearchCategoryEnum.author) {
        return item.author.toLowerCase().includes(search.toLocaleLowerCase());
      }
    });

  return (
    <>
      <div className={styles.searchBar}>
        <select
          className={styles.selector}
          value={searchCategory}
          onChange={selectHandleChange}
        >
          <option value={SearchCategoryEnum.title}>Название</option>
          <option value={SearchCategoryEnum.author}>Автор</option>
        </select>
        <input
          className={styles.search}
          value={searchText}
          onChange={searchHandleChange}
          placeholder={PLACEHOLDER_TEXT}
        />
      </div>
      <BooksList items={filterBySearch(books, searchText)} />
    </>
  );
};

export default BooksPage;
