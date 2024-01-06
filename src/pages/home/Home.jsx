import "./Home.css";
import mainImg from "../../assets/main.jpg";
import Product from "../../components/product/Product";

const Home = () => {
  const listCount = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <main>
      <div className="container">
        <div className="HomeMainImg">
          <img src={mainImg} alt="mainImg" />
        </div>
        <div className="HomeMainContent">
          <p>New Arrival</p>
          <span>Discover Our New Collection</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <div className="buyBtn">
            <p>BUY Now</p>
          </div>
        </div>
      </div>
      <div className="container-list">
        <div className="ListTitle">
          <h2>Browse The Range</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="HomeMainContent2">
          <div className="MainList">
            <img src={mainImg} alt="" />
            <p>Dining</p>
          </div>
          <div className="MainList">
            <img src={mainImg} alt="" />
            <p>Living</p>
          </div>
          <div className="MainList">
            <img src={mainImg} alt="" />
            <p>Bedroom</p>
          </div>
        </div>
      </div>
      <div className="container-list">
        <div className="ListTitle">
          <h2>Our Products</h2>
        </div>
        <div className="HomeMainContent3">
          {listCount.map((product, index) => (
            <Product key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
