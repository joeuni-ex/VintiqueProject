import "./Product.css";
import mainImg from "../../assets/main.jpg";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdShare } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../../model/Cart";
import CartService from "../../services/cart.service";
import interestService from "../../services/interest.service";
import Heart2 from "../icon/Heart2";
import Heart from "../icon/Heart";
import { useSelector } from "react-redux";

const Product = ({ product, fetchData }) => {
  const curruntUser = useSelector((state) => state.user); //인증된 유저 정보
  const navigate = useNavigate();

  //like 버튼 클릭 시
  const handleAddInterest = async () => {
    if (confirm("관심 제품에 추가하시겠습니까?")) {
      if (curruntUser) {
        try {
          await interestService.saveInterest(product?.id);
          alert("정상적으로 관심 제품에 추가되었습니다.");
          fetchData();
        } catch (err) {
          alert("관심 제품 추가 시 에러 발생");
          console.error(err);
        }
      } else {
        alert("로그인이 필요한 서비스입니다.");
        navigate("/login");
      }
    }
  };

  //관심 제품 삭제
  const handleDeleteInterest = async () => {
    if (confirm("관심 제품에서 삭제하시겠습니까?")) {
      try {
        await interestService.deleteInterest(product?.id);
        alert("정상적으로 관심 제품에서 삭제되었습니다.");
        fetchData();
      } catch (err) {
        alert("관심 제품 제거 시 에러 발생");
        console.error(err);
      }
    }
  };

  //cart버튼 클릭 시
  const handleAddCart = async () => {
    if (confirm("장바구니에 추가하시겠습니까?")) {
      if (curruntUser) {
        try {
          //장바구니 저장
          await CartService.saveCart(new Cart(product.id, 1));
          alert("정상적으로 장바구니에 추가되었습니다.");
        } catch (err) {
          alert("장바구니 추가 시 에러 발생");
          console.error(err);
        }
      } else {
        alert("로그인이 필요한 서비스입니다.");
        navigate("/login");
      }
    }
  };

  return (
    <div className="product">
      <img className="productImg" src={product?.mainImage} alt="" />
      <div className="productInfo">
        <p>{product?.name}</p>
        <span>{product?.description}</span>
        <p style={{ fontSize: "1rem" }}>
          {product?.price.toLocaleString("ko-KR")}원
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
          {product?.addedInterest === true ? (
            <p onClick={handleDeleteInterest}>
              <Heart />
              Like
            </p>
          ) : (
            <p onClick={handleAddInterest}>
              <FaRegHeart />
              Like
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
