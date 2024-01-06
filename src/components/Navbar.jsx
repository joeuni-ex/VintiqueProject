import { BsCart } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { ImVine } from "react-icons/im";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div style={{ marginLeft: "5%" }}>
          <p>
            <Link to="/" className="navbar-logo">
              <ImVine /> Vintique
            </Link>
          </p>
        </div>
        <div>
          <ul className="navbar_link">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/">
                <li>Contact</li>
              </NavLink>
            </li>
          </ul>
        </div>
        <div style={{ marginRight: "5%" }}>
          <ul className="navbar_link">
            <li>
              <NavLink to="">
                <BsCart />
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <IoSearch />
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <FaRegHeart />
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <FaRegUser />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
