import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../../Components/Card/Card";
import "../cart/Cart.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";

const Cart = (cartItem) => {
  const location = useLocation();
  const { state } = location;

  console.log(state.data);
  return (
    <div className="cartContainer">
      <Navbar cartItem={cartItem} />

      <div className="cartBodyContent">
        <div className="cartWrapper">
          {state?.data?.map((cart) => (
            <Card data={cart} />
          ))}
        </div>
        {/* navbar */}
        {/* header  your all carts  */}
        {/*  */}
      </div>
    </div>
  );
};

export default Cart;
