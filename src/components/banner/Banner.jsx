import "./Banner.css";
import img from "../../assets/shop.jpg";

const Banner = ({ title, subTitle, category }) => {
  return (
    <div className="bannerImg">
      <img src={img} alt="shopImg" />
      <p className="bannerText">{title}</p>
      {subTitle && (
        <p className="bannerCategory">
          <span style={{ fontWeight: "bold" }}>{subTitle}</span> &#62;
          {subTitle}
          &#62; {category}
        </p>
      )}
    </div>
  );
};

export default Banner;
