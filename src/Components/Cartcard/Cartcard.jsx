import React, { useState } from "react";
import "./Cartcard.css";
import { BsFillBookmarkFill } from "react-icons/Bs";
import { MdDelete } from "react-icons/Md";

const Cartcard = ({ data, setCartdata, cartData }) => {
  let [quantity, setQuantity] = useState(1);
  let quantityIncreased = () => {
    setQuantity(quantity + 1);
  };
  let quantityDecreased = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  // const handleDelete = (id) => {
  //   let filtered = cartData.filter((card) => card.id !== id);
  //   setCartdata(filtered);
  // };

  const handleDelete = (id) => {
    let x = cartData.filter((cart) => {
      return cart.id !== id;
    });
    setCartdata(x);
  };

  return (
    <div className="cartcardContainer">
      <div className="carditemLeft">
        <input type="checkbox" />
        <img className="addedProduct" src={data.img} alt="productimg" />
        <p>{data.Name}</p>
      </div>
      <div className="carditemRight">
        <div className="itemPrice">
          <p> Rs. {data.price}</p>
          <div className="cardIcons">
            {/* icon bookmark */}
            <BsFillBookmarkFill className="BookmarkIcon" />
            {/* delete icon */}
            <MdDelete
              onClick={() => {
                handleDelete(data.id);
              }}
              className="DeleteIcon"
            />
          </div>
        </div>
        <div className="Itemsbtns">
          <button onClick={quantityDecreased} className="incrementBtn">
            -
          </button>
          <p>{quantity}</p>
          <button onClick={quantityIncreased} className="decrementBtn">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartcard;
