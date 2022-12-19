import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ input, setInput }) => {
  const [showNav, setShowNav] = useState(true);
  // const [showList, setShowList] = useState(windowWidth ? true : false);
  useEffect(() => {
    window.onscroll = function (e) {
      if (this.oldScroll > this.scrollY) {
        setShowNav(true);
      } else if (this.oldScroll < this.scrollY) {
        setShowNav(false);
      }
      this.oldScroll = this.scrollY;
      delete window.onscroll;
    };
  }, []);
  return (
    <div
      className="Navbar"
      style={!showNav ? { transform: "translateY(-100px)" } : null}
    >
      <div className="myContainer">
        <p>
          KH<span className="title">Library</span>
        </p>
        <FontAwesomeIcon
          icon={faBars}
          // onClick={() => {
          //   setShowList((prevalue) => !prevalue);
          // }}
        />
        <div className="profile">
          <span className="material-symbols-outlined">shopping_cart</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
