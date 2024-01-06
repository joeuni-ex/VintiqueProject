import "./Product.css";
import mainImg from "../../assets/main.jpg";

const Product = () => {
  return (
    <div className="product">
      <img src={mainImg} alt="" />
      <div className="productInfo">
        <p>Dining</p>
        <p>설명</p>
        <p>가격 : 15000원</p>
      </div>
    </div>
  );
};

export default Product;
