import "./Navbar.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";

const Navbar = () => {
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
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </nav>
      <div className="icons flex">
        <IoSearchOutline className="ikon" />
        <IoMdCart className="ikon" />
      </div>
    </div>
    </div>
  );
};

export default Navbar;