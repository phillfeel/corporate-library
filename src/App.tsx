import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventsPage from "./components/EventsPage/EventsPage";
import Navbar from "./components/Navbar/Navbar";
import NewsPage from "./components/NewsPage/NewsPage";
import TeamPage from "./components/TeamPage/TeamPage";
import BooksPage from "./components/BooksPage/BooksPage";
import BookPage from "./components/BookPage/BookPage";
import ProfilePage from "./components/ProfilePage/EventsPage";
import Profile from "./components/Profile/Profile";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Navbar />
        <div className={styles.body}>
          <Profile />
          <Routes>
            <Route path="/corporate-library" element={<BooksPage />} />
            <Route path="/corporate-library/news" element={<NewsPage />} />
            <Route path="/corporate-library/team" element={<TeamPage />} />
            <Route path="/corporate-library/events" element={<EventsPage />} />
            <Route path="/corporate-library/book/:id" element={<BookPage />} />
            <Route
              path="/corporate-library/profile"
              element={<ProfilePage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
