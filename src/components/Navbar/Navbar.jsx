import React from "react";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useStore } from "../../utils/storeContext";

const Navbar = () => {
  const { totalCartItems } = useStore();

  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">
          <Link to="/">EverTrend</Link>
        </h1>
        <nav className="navi">
          <ul className="flex">
            <li>
              <a href="#shop">Product</a>
            </li>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
          </ul>
        </nav>
        <div className="icons flex">
          <Link to="/cart" className="cart-link">
            <IoMdCart className="ikon" />
            <span className="cart-count">{totalCartItems}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
