import "./Footer.css";
// import { RiFacebookCircleLine } from "react-icons/ri";
import {
  RiWhatsappLine,
  RiInstagramLine,
  RiTwitterLine,
  RiFacebookCircleLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <section className="footer">
      <p>2024@allrightsreserved</p>
      <ul className="socials">
        <li>
          <a href="">
            <RiWhatsappLine />
          </a>
        </li>
        <li>
          <a href="">
            <RiFacebookCircleLine />
          </a>
        </li>
        <li>
          <a href="">
            <RiTwitterLine />
          </a>
        </li>
        <li>
          <a href="">
            <RiInstagramLine />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
