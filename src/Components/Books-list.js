import React from "react";
import Book from "./Reusable/Book";
import FetchData from "./FetchData";

const BooksList = (props) => {
  const books = props.booksData;
  const items = books.items || [];
  const booksRenderd = items
    .filter((book) =>
      props.methods.genre !== ""
        ? book.volumeInfo.categories?.find(
            (category) => category === props.methods.genre
          )
        : book
    )
    .map((book) => <Book {...book} />);
  console.log();
  return (
    <div className="main">
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt=""
        />
        <div className="intro">
          <i>
            <h2>{"Do Not Stop Reading".toUpperCase()}</h2>
          </i>
        </div>
      </div>
      <div>{props.children}</div>
      <ul className="BooksList">{items.length ? booksRenderd : "Loading"}</ul>
    </div>
  );
};

export default BooksList;
