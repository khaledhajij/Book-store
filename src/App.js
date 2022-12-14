import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/styles.css";
import Genres from "./Components/Genres";
import FetchData from "./Components/FetchData";
import BooksList from "./Components/Books-list";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetails from "./Components/BookDetails";

function App() {
  const [methods, setmethods] = useState({
    genre: "",
    Sort: "",
    "Search by": "Book name",
    search: "",
    subject: "",
  });
  const volumes = methods["Search by"] === "Book name" ? methods.search : "";
  const authors = methods["Search by"] === "Author" ? methods.search : "";
  const url = `https://www.googleapis.com/books/v1/volumes?q=${volumes}+inauthor:${authors}&maxResults=40`;
  const { data, setData } = FetchData(methods, url);
  const genres = new Set(
    data.items &&
      data.items
        .filter((item) => item.volumeInfo.categories?.length)
        .map((item) => item.volumeInfo.categories[0])
  );
  return (
    <BrowserRouter>
      <Navbar methods={methods} setmethods={setmethods} />

      <Genres
        title="GENRES"
        data={[...genres]}
        methods={methods}
        setmethods={setmethods}
        booksData={data}
        setData={setData}
      />
      <Routes>
        <Route
          path="/"
          element={
            <BooksList
              methods={methods}
              setmethods={setmethods}
              booksData={data}
              setData={setData}
            />
          }
        />
        <Route path="/:id" element={<BookDetails booksData={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
