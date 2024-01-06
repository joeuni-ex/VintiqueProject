import "./Home.css";
import mainImg from "../../assets/main.jpg";

const Home = () => {
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
    </main>
  );
};

export default Home;
