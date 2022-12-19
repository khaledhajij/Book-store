import React from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
  const arr = [3, 4, 5];
  const rating = arr[Math.floor(arr.length * Math.random())];
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i} className="material-symbols-outlined yellow">star</span>);
  }
  for (let i = 0; i < 5 - rating; i++) {
    stars.push(<span key={i+10} className="material-symbols-outlined">star</span>);
  }
  return (
    <li className="book-card">
      <img src={`${props.volumeInfo?.imageLinks?.smallThumbnail}`} alt="" />
      <div className="rec">
        <button className="btn btn-primary">
          <Link to={`/${props.id}`}>View book</Link>
        </button>
      </div>
      <div className="info">
        <div className="title-author">
          <p className="title">{props.volumeInfo?.title}</p>
          <p className="author">
            {" "}
            by <br /> <span>{props.volumeInfo?.authors?.[0]}</span>
          </p>
        </div>
        <div className="rating">{stars}</div>
      </div>
    </li>
  );
};

export default Book;
