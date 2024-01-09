import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";
import "./Shop.css";

const Shop = () => {
  const listCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <div className="shopContainer">
      <Banner title="Shop" subTitle="Shop" category="전체" />
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
