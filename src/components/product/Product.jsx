import "./Product.css";
import mainImg from "../../assets/main.jpg";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdShare } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img className="productImg" src={mainImg} alt="" />
      <div className="productInfo">
        <p>{product?.category}</p>
        <span>{product?.description}</span>
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          가격 : {product?.price.toLocaleString("ko-KR")} 원
        </p>
      </div>
      <div className="productAddCart">
        <Link
          to={`/product/${product?.id}`}
          style={{ color: "black", textDecoration: "none" }}
        >
          <div className="AddCartBtn">
            <p>View</p>
          </div>
        </Link>
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
