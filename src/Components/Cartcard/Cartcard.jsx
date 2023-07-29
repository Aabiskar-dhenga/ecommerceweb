import React from "react";
import "./Cartcard.css";
import { BsFillBookmarkFill } from "react-icons/Bs";
import { MdDelete } from "react-icons/Md";

const Cartcard = ({ data }) => {
  console.log(data);
  return (
    <div className="cartcardContainer">
      <div className="carditemLeft">
        <input type="checkbox" />
        <img className="addedProduct" src={data.img} alt="productimg" />
        <p>{data.Name}</p>
      </div>
      <div className="carditemRight">
        <div>
          <p> Rs. {data.price}</p>
          <div className="cardIcons">
            {/* icon bookmark */}
            <BsFillBookmarkFill className="BookmarkIcon" />
            {/* delete icon */}
            <MdDelete className="DeleteIcon" />
          </div>
        </div>
        <div className="Itemsbtns">
          <button className="incrementBtn">-</button>
          <p>1</p>
          <button className="decrementBtn">+</button>
        </div>
      </div>
    </div>
  );
};

export default Cartcard;
