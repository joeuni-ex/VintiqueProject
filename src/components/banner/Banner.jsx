import "./Banner.css";
import img from "../../assets/shop.jpg";
import { useEffect, useState } from "react";

const Banner = ({ title, subTitle, category }) => {
  const [upperCategory, setUpperCategory] = useState("");
  useEffect(() => {
    if (category === "all") {
      setUpperCategory("All");
    } else if (category === "dining") {
      setUpperCategory("Dining");
    } else if (category === "living") {
      setUpperCategory("Living");
    } else if (category === "bedroom") {
      setUpperCategory("Bedroom");
    }
  }, [category]);

  return (
    <div className="bannerImg">
      <img src={img} alt="shopImg" />
      <p className="bannerText">{title}</p>
      {subTitle && (
        <p className="bannerCategory">
          Home &#62;
          {subTitle}
          &#62; <span style={{ fontWeight: "bold" }}>{upperCategory}</span>
        </p>
      )}
    </div>
  );
};

export default Banner;
