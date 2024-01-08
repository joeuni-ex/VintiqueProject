import "./Product.css";
import mainImg from "../../assets/main.jpg";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdShare } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate("/");
  };

  return (
    <div className="product">
      <img className="productImg" src={mainImg} alt="" />
      <div className="productInfo">
        <p>Dining</p>
        <span>설명</span>
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          가격 : 15000원
        </p>
      </div>
      <div className="productAddCart">
        <div onClick={handleView} className="AddCartBtn">
          view
        </div>
        <div className="productIcon">
          <p>
            <MdShare />
            Share
          </p>
          <p>
            <LuShoppingCart />
            Cart
          </p>
          <p>
            <FaRegHeart />
            Like
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
