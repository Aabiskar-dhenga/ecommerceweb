import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footertopBAr">
          <h1 className="categoryText">Category</h1>
          <div className="supportLinkWrappper">
            <ul className="supportLinks">
              <Link to="/" className="footerLinks">
                Home
              </Link>
              <Link className="footerLinks">About us</Link>
              <Link className="footerLinks"> All Products</Link>
              <Link to="/cart" className="footerLinks">
                Cart{" "}
              </Link>
            </ul>
          </div>
        </div>
        <div className="foot2">
          <div className="contactformWrapper">
            <h1 className="messageUsText ">Message us </h1>
            <input
              className="messageusInputBox"
              placeholder="Enter Your Name"
              type="text"
            />
            <input
              className="messageusInputBox"
              placeholder="Enter Your Email"
              type="text"
            />
            <input
              className="messageusInputBox"
              placeholder=" Enter Your Subject"
              type="text"
            />
            <input
              className="messageusInputBox"
              placeholder=" Enter theMessage"
              type="text"
            />
          </div>
          <button className="sendMessageBtn">Send message</button>
        </div>
      </div>
      <div className="license">Powered by dhenga</div>
    </div>
  );
};

export default Footer;
