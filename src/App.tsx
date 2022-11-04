import React, { Component, ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventsPage from "./components/EventsPage/EventsPage";
import Navbar from "./components/Navbar/Navbar";
import NewsPage from "./components/NewsPage/EventsPage";
import TeamPage from "./components/TeamPage/EventsPage";
import BooksPage from "./components/BooksPage/BooksPage";
import BookPage from "./components/BookPage/BookPage";
import Profile from "./components/Profile/Profile";

import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <div className={styles.mainContainer}>
        <BrowserRouter>
          <Navbar />
          <Profile />
          <div className={styles.body}>
            <Routes>
              <Route path="/" element={<BooksPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/book/:id" element={<BookPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
