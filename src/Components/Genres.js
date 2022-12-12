import { Dropdown } from "bootstrap";
import React from "react";
import { genres } from "./data";
import DropDown from "./Reusable/DropDown";

const Genres = ({ data, title, methods, setmethods, booksData, setData }) => {
  const renderedData = data.map((genre) => (
    <li>
      {/* <span className="material-symbols-outlined">{icon}</span> */}
      {genre.slice(0, 1).toUpperCase() + genre.slice(1)}
    </li>
  ));
  const handleGenre = (value, title) => {
    setmethods({
      ...methods,
      [title]: value,
      search: title === "Search by" ? "" : methods.search,
    });
    console.log(value, title);
  };
  return (
    <div className="Genres">
      <div className="myContainer">
        <div className="search-bar">
          <DropDown
            arr={data}
            booksData={booksData}
            setData={setData}
            handleGenre={handleGenre}
            name="genre"
            value={methods.name}
          />
          <DropDown
            arr={["Author", "Book name"]}
            booksData={booksData}
            setData={setData}
            name="Search by"
            handleGenre={handleGenre}
            value={methods.name}
          />
          <DropDown
            arr={["Price", "Alphabetical", "Number of pages", "Rating"]}
            booksData={booksData}
            handleGenre={handleGenre}
            name="Sort"
            setData={setData}
            value={methods.name}
          />
          {methods["Search by"] === "Book name" ? (
            <input
              type="search"
              id="form1"
              className="form-control"
              placeholder="search for books.."
              value={methods.search}
              onChange={(e) => {
                setmethods((preObj) => {
                  return {
                    ...preObj,
                    search: e.target.value,
                  };
                });
              }}
            />
          ) : (
            <input
              type="search"
              id="form1"
              className="form-control"
              placeholder="Search by author.."
              value={methods.search}
              onChange={(e) => {
                setmethods((preObj) => {
                  return {
                    ...preObj,
                    search: e.target.value,
                  };
                });
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Genres;
