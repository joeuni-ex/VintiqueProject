import Star from "../icon/Star";
import "./Reviews.css";

const Reviews = ({ review }) => {
  const stars = Array.from({ length: review?.rate }, (_, index) => (
    <Star key={index} width={20} height={20} />
  ));
  return (
    <div className="reivew-content">
      <div style={{ display: "flex" }}>
        <div>{stars}</div>
        <div style={{ display: "flex" }}>
          <p style={{ margin: "0px 10px" }}>{review?.name}</p>
          <p>{review?.createTime}</p>
        </div>
      </div>
      <div>
        <p>{review?.reviewContent}</p>
      </div>
    </div>
  );
};

export default Reviews;
