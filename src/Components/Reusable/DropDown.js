import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const DropDown = ({ name, arr, booksData, setData, handleGenre }) => {
  const myArr = arr || [];
  const renderedList = myArr.map((ele) => (
    <Dropdown.Item key={ele} onClick={() => handleGenre(ele,name)}>
      {ele}
    </Dropdown.Item>
  ));
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={name || "Dropdown button"}
    >
      {renderedList}
    </DropdownButton>
  );
};

export default DropDown;
