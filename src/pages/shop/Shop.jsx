import img from "../../assets/shop.jpg";
import Product from "../../components/product/Product";
import "./Shop.css";

const Shop = () => {
  const listCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <div className="shopContainer">
      <div className="bannerImg">
        <img src={img} alt="shopImg" />
        <p className="shopText">Shop</p>
        <p className="shopCategory">
          <span style={{ fontWeight: "bold" }}>Home</span> &#62; Shop &#62; 전체
        </p>
      </div>
      <div className="sort">정렬</div>
      <div className="container-list">
        <div className="HomeMainContent3">
          {listCount.map((product, index) => (
            <Product key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
