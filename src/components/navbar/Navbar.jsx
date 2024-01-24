import { BsCart } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { ImVine } from "react-icons/im";
import { LuLogOut } from "react-icons/lu";
import { GrCart } from "react-icons/gr";
import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentUser } from "../../store/actions/user";
import { useEffect, useState } from "react";

const Navbar = () => {
  const curruntUser = useSelector((state) => state.user); //인증된 유저 정보
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false); //검색창

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {}, [curruntUser]);

  //로그아웃
  const logout = () => {
    dispatch(clearCurrentUser());
    navigate("/login");
  };

  return (
    <nav>
      <div className="navbar">
        <div style={{ marginLeft: "7%" }}>
          <p style={{ width: "250px" }}>
            <Link to="/" className="navbar-logo">
              <ImVine style={{ fontSize: "1.3rem" }} /> Vintique
            </Link>
          </p>
        </div>
        <div>
          <ul className="navbar_link">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
        <div style={{ marginRight: "7%" }}>
          <ul className="navbar_link">
            {curruntUser && <li>{curruntUser.username}님 환영합니다</li>}
            {curruntUser?.role === "USER" ? (
              <>
                <li>
                  <NavLink to="/cart">
                    <GrCart />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/user/order">
                    <FaRegUser />
                  </NavLink>
                </li>
              </>
            ) : (
              ""
            )}

            {curruntUser?.role === "ADMIN" ? (
              <li>
                <NavLink to="/admin/order">
                  <FaRegUser />
                </NavLink>
              </li>
            ) : (
              ""
            )}
            {!curruntUser && (
              <li>
                <NavLink to="/login">
                  <FaRegUser />
                </NavLink>
              </li>
            )}

            {curruntUser && (
              <li>
                <LuLogOut onClick={logout} style={{ cursor: "pointer" }} />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
