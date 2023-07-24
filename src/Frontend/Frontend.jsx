import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Card from "../Components/Card/Card";
import "../Frontend/Frontend.css";
import { products } from "../Utilis/Data";
import Sidebar from "../Components/Sidebar/Sidebar";

const Frontend = () => {
  const [cartItem, setCartItem] = useState([]);

  console.log(cartItem);

  return (
    <div>
      <Navbar cartItem={cartItem} />
      <div className="bodyContent">
        <Sidebar />
        <div className="bodyContainer">
          {products.map((product) => (
            <Card setCartItem={setCartItem} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
