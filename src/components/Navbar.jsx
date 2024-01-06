import { BsCart } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div style={{ marginLeft: "5%" }}>
          <p>😻로고</p>
        </div>
        <div>
          <ul className="navbar_link">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">
                <li>Contact</li>
              </a>
            </li>
          </ul>
        </div>
        <div style={{ marginRight: "5%" }}>
          <ul className="navbar_link">
            <li>
              <a href="">
                <BsCart />
              </a>
            </li>
            <li>
              <a href="">
                <IoSearch />
              </a>
            </li>
            <li>
              <a href="">
                <FaRegHeart />
              </a>
            </li>
            <li>
              <a href="">
                <FaRegUser />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
