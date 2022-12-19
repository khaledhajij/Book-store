import React from "react";
import DropDown from "./Reusable/DropDown";

const Genres = ({ data, title, methods, setmethods, booksData, setData }) => {
  const handleGenre = (value, title) => {
    setmethods({
      ...methods,
      [title]: value,
      search: title === "Search by" ? "" : methods.search,
    });
  };
  return (
    <div className="Genres">
      <div className="myContainer">
        <div className="search-bar">
          <div className="dropdowns">
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
          </div>
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
