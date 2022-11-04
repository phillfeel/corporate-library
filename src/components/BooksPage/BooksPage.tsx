import React, { useEffect, useState } from "react";
import data from "../../fixtures/books.json";
import { BookInterface } from "../../interfaces/book.interface";
import Books from "../Books/Books";

import styles from "./BooksPage.module.css";

enum SearchCategoryEnum {
  title = "TITLE",
  author = "AUTHOR",
}

const BooksPage: React.FC = () => {
  const [books, setBooks] = useState<BookInterface[]>([]);
  const [searchCategory, setSearchCategory] = useState<SearchCategoryEnum>(
    SearchCategoryEnum.title
  );
  const [searchText, setSearchText] = useState<string>("");

  const PLACEHOLDER_TEXT =
    searchCategory === SearchCategoryEnum.author
      ? "Введите автора..."
      : "Введите название...";

  useEffect(() => {
    const libraryBooks: BookInterface[] = data;
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

  const filterBySearch = (entities: BookInterface[], search: string) =>
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
      <Books items={filterBySearch(books, searchText)} />
    </>
  );
};

export default BooksPage;
