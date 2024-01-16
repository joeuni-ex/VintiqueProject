import "./Product.css";
import mainImg from "../../assets/main.jpg";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdShare } from "react-icons/md";
import { Link } from "react-router-dom";
import Cart from "../../model/Cart";
import CartService from "../../services/cart.service";

const Product = ({ product }) => {
  const handleAddCart = async () => {
    try {
      //장바구니 저장
      await CartService.saveCart(new Cart(product.id, 1));
      alert("정상적으로 장바구니에 추가되었습니다.");
    } catch (err) {
      alert("장바구니 추가 시 에러 발생");
      console.error(err);
    }
  };

  return (
    <div className="product">
      <img className="productImg" src={product?.mainImage} alt="" />
      <div className="productInfo">
        <p>{product?.name}</p>
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
          <p onClick={handleAddCart}>
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
