import React from "react";
import Book from "./Reusable/Book";

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
    .map((book) => <Book key={book.id} {...book} />);
  console.log();
  return (
    <div className="main">
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
          alt=""
        />
        <div className="intro">
            <h2>{"Do Not Stop Reading".toUpperCase()}</h2>
        </div>
      </div>
      <div>{props.children}</div>
      <ul className="BooksList">{items.length ? booksRenderd : "No books"}</ul>
    </div>
  );
};

export default BooksList;
