import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Navbar from "./Components/Navbar/Navbar";
import Frontend from "./Frontend/Frontend";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/cart/Cart";
// import Card from "./Components/Card/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="appContainer">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
