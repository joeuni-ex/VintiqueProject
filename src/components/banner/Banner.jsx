import "./Banner.css";
import img from "../../assets/shop.jpg";

const Banner = ({ title, subTitle, category }) => {
  return (
    <div className="bannerImg">
      <img src={img} alt="shopImg" />
      <p className="bannerText">{title}</p>
      {subTitle && (
        <p className="bannerCategory">
          Home &#62;
          {subTitle}
          &#62; <span style={{ fontWeight: "bold" }}>{category}</span>
        </p>
      )}
    </div>
  );
};

export default Banner;
