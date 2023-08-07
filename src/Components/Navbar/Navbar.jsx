import React from "react";
import { ImSearch } from "react-icons/Im";
import { MdShoppingCart } from "react-icons/Md";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ cartItem }) => {
  return (
    <div className="navAppContainer">
      <div className="navContainer">
        <Link to={"/"}>
          <img
            src="https://icms-image.slatic.net/images/ims-web/458d4688-ae26-4e6d-8f39-c26194de228a.png"
            alt=""
            className="logo"
          />
        </Link>
        <div className="inputWrapper">
          <input
            type="text"
            className="inputBox"
            placeholder="Search in Amazon"
          />
          <button className="searchBtn">
            <ImSearch className="searchImgbtn" />
          </button>
        </div>
        <div className="signWrapper">
          <Link to="/cart" state={{ data: cartItem }}>
            <button className="shoppingCart">
              <MdShoppingCart className="cartImg" />
              {cartItem?.length}
            </button>
          </Link>
          <button className="signInbtn">Login</button>
          <button className="signInbtn">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
