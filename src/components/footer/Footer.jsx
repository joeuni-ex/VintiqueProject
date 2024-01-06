import { Link } from "react-router-dom";
import "./Footer.css";
import { ImVine } from "react-icons/im";

const Footer = () => {
  return (
    <footer>
      <div className="footerTop">
        <div>
          <p>
            <Link to="/" className="logo">
              <ImVine /> Vintique
            </Link>
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur</p>
        </div>
        <div>
          <p>Links</p>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div></div>
      </div>
      <div className="footerBottom">
        <p>2024 Vintique. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
