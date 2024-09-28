import React from "react";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <header className="flex justify-around items-center h-20 bg-emerald-400 shadow-lg">
      <div className="flex">
        <img
          src="https://icon-library.com/images/commercial-icon/commercial-icon-15.jpg"
          alt="online"
          className="w-10 h-10"
        />
        <h1 className="text-3xl italic font-semibold ">Online Shopping</h1>
      </div>
      <nav>
        <ul className="nav flex gap-10 ">
          <li>
            <Link to="/">
              <img
                src="https://icon-library.com/images/product-icon-png/product-icon-png-13.jpg"
                alt="icon1"
                className="h-10 w-10"
              />
            </Link>
          </li>
          <li>
            <Link to="/Cart">
              <img
                src="https://www.nicepng.com/png/full/285-2851862_add-to-cart-png.png"
                alt="cart1"
                className="h-10 w-10"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
