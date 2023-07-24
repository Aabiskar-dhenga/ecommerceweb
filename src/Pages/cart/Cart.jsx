import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../../Components/Card/Card";
import "../cart/Cart.css";

const Cart = () => {
  const location = useLocation();
  const { state } = location;

  console.log(state.data);
  return (
    <div className="cartContainer">
      <h1>cart</h1>
      <div className="cartWrapper">
        {state?.data?.map((cart) => (
          <Card data={cart} />
        ))}
      </div>
      {/* navbar */}
      {/* header  your all carts  */}
      {/*  */}
    </div>
  );
};

export default Cart;
