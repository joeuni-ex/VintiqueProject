import "./Product.css";
import mainImg from "../../assets/main.jpg";

const Product = () => {
  return (
    <div className="product">
      <img src={mainImg} alt="" />
      <div className="productInfo">
        <p>Dining</p>
        <span>설명</span>
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          가격 : 15000원
        </p>
      </div>
    </div>
  );
};

export default Product;
