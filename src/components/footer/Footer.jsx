import { Link } from "react-router-dom";
import "./Footer.css";
import { ImVine } from "react-icons/im";

const Footer = () => {
  return (
    <footer>
      <div className="footerTop">
        <div>
          <p style={{ marginBottom: "10px" }}>
            <Link to="/" className="logo">
              <ImVine /> Vintique
            </Link>
          </p>
          <p> 지금까지 없었던 감성적인 공간 Vintique</p>
        </div>
        <div>
          <p className="footer-cate">Links</p>
          <ul className="footer-links">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <p className="footer-cate">Help</p>
          <ul className="footer-links">
            <li>결제 관련</li>
            <li>고객 문의</li>
            <li>개인정보 정책</li>
          </ul>
        </div>
        <div>
          <p className="footer-cate"></p>
          <ul className="footer-links">
            <li></li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p>2024 Vintique. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
