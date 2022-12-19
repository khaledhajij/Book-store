import React from "react";
import { useParams } from "react-router-dom";

const BookDetails = ({ booksData }) => {
  const { id } = useParams();
  const bookNeeded = booksData.items?.find((book) => book.id === id);
  const volumeInfo = bookNeeded?.volumeInfo;
  console.log(bookNeeded);
  console.log(booksData);
  return (
    <div className="BookDetails">
      <div className="myContainer">
        <div className="img-container">
          <img src={`${volumeInfo?.imageLinks.thumbnail}`} alt="" />
        </div>
        <div>
          <div className="img-main-info">
            <div className="main-info">
              <h2>{volumeInfo?.title}</h2>
              <h4>{volumeInfo?.subtitle}</h4>
              <p className="authors">
                Written by: <span>{volumeInfo?.authors}</span>
              </p>
              <div className="buttons">
                <button className="btn btn-secondary">
                  <span class="material-symbols-outlined">garden_cart</span>ADD
                  TO CART
                </button>
                <button className="btn btn-secondary">
                  <span class="material-symbols-outlined">sell</span>ADD TO
                  WISHLIST
                </button>
              </div>
            </div>
          </div>
          <div className="description">
            <h3>Description</h3>
            <p>{volumeInfo?.description}</p>
          </div>
          <div className="product-details">
            <h3>Book Details</h3>
            <div className="lists">
              <ul>
                <li>
                  <p>Page count</p>
                </li>
                <li>
                  <p>Publish date</p>
                </li>
                <li>
                  <p>Language</p>
                </li>
                <li>
                  <p>Categories</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>{volumeInfo?.pageCount}</p>
                </li>
                <li>
                  <p>{volumeInfo?.publishedDate}</p>
                </li>
                <li>
                  <p>{volumeInfo?.language}</p>
                </li>
                <li>
                  <p>{volumeInfo?.categories}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
