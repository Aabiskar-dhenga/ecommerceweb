import React from "react";
import "../Card/Card.css";

const Card = ({ data, setCartItem }) => {
  const handleAddCart = () => {
    setCartItem((prevState) => {
      return [...prevState, data];
    });
  };
  return (
    <div className="cardContainer">
      <div className="imgWrappper">
        <img src={data.img} className="productImg" alt="" />
      </div>
      <div>
        <h3> {data.Name}</h3>
        <p className="priceRs">{data.price}</p>
      </div>
      <button className="cartButton" onClick={handleAddCart}>
        Add to cart
      </button>
    </div>
  );
};

export default Card;
