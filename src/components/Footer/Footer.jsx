import "./Footer.css";
import {
  RiWhatsappLine,
  RiInstagramLine,
  RiTwitterLine,
  RiFacebookCircleLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <section className="footer">
      <p>@2024,All Rights Reserved</p>
      <ul className="socials">
        <li>
          <a href="https://www.whatsapp.com/" target="_blank">
            <RiWhatsappLine />
          </a>
        </li>
        <li>
          <a href="https://web.facebook.com/" target="_blank">
            <RiFacebookCircleLine />
          </a>
        </li>
        <li>
          <a href="https://x.com/" target="_blank">
            <RiTwitterLine />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            <RiInstagramLine />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
