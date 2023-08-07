import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footertopBAr">
          <h1 className="categoryText">Category</h1>
          <div className="supportLinkWrappper">
            <ul className="supportLinks">
              <li className="footerLinks">Home</li>
              <li className="footerLinks">About us</li>
              <li className="footerLinks"> All Products</li>
              <li className="footerLinks">Cart </li>
            </ul>
          </div>
        </div>
        <div className="foot2">
          <div className="contactformWrapper">
            <h1 className="messageUsText ">Message us </h1>
            <input
              className="messageusInputBox"
              placeholder="Name"
              type="text"
            />
            <input
              className="messageusInputBox"
              placeholder="Email"
              type="text"
            />
            <input
              className="messageusInputBox"
              placeholder="Subject"
              type="text"
            />
            <input
              className="messageusInputBox"
              placeholder="Message"
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
