import React from "react";
import { IoMdCart } from "react-icons/io";
import "./Navbar.css";

const Navbar = ({ cartItems }) => {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">
          <a href="#">EverTrend</a>
        </h1>
        <nav className="navi">
          <ul className="flex">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
        </nav>
        <div className="icons flex">
          <IoMdCart className="ikon" />
          <span className="cart-count">{cartItems.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
