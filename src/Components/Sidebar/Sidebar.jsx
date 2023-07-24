import React from "react";
import "../Sidebar/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebarAppcontainer">
      <div className="deliveryWrapper">
        <h3>Delivery Date</h3>
        <div className="deliveryOption">
          <input type="checkbox" />
          <p>Get it by Tommorrow</p>
        </div>
        <div className="deliveryOption">
          <input type="checkbox" />
          <p>Get it in 2 days</p>
        </div>
      </div>
      <div className="brandWrapper">
        <h3>BRANDS</h3>
        <div className="deliveryOption">
          <input type="checkbox" />
          <p>HP</p>
        </div>
        <div className="deliveryOption">
          <input type="checkbox" />
          <p>ASUS</p>
        </div>
        <div className="deliveryOption">
          <input type="checkbox" />
          <p>MAC</p>
        </div>
        <div className="deliveryOption">
          <input type="checkbox" />
          <p>SAMSUNG</p>
        </div>
      </div>
      <div className="priceWrapper">
        <h3>Price ranges</h3>
        <div className="priceInputWrapper">
          <input
            className="priceInputbox"
            placeholder=" Rs min"
            type="number"
          />
          <input
            className="priceInputbox"
            placeholder=" Rs max"
            type="number"
          />
          <button>Go</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
