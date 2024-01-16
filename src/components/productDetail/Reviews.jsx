import Star from "../rate/Star";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="basic-container">
      <div className="review-rate-content">
        <Star width={30} height={30} />
        <p className="review-rate">4.5</p>
        <p>
          <span style={{ fontWeight: "bold" }}>5명</span>의 고객님이 리뷰를
          남겨주셨습니다.
        </p>
      </div>
      <div className="reivew-content">
        <div style={{ display: "flex" }}>
          <div>
            <Star width={20} height={20} />
            <Star width={20} height={20} />
            <Star width={20} height={20} />
            <Star width={20} height={20} />
          </div>
          <div style={{ display: "flex" }}>
            <p>홍길동</p>
            <p>2022-09-11</p>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio
            asperiores illo a, harum, ab libero consequatur architecto fugiat
            inventore molestiae suscipit rerum possimus quos ut officiis
            voluptatem accusantium beatae.
          </p>
        </div>
      </div>
      <div className="reivew-content">
        <div style={{ display: "flex" }}>
          <div>
            <Star width={20} height={20} />
            <Star width={20} height={20} />
            <Star width={20} height={20} />
            <Star width={20} height={20} />
          </div>
          <div style={{ display: "flex" }}>
            <p>홍길동</p>
            <p>2022-09-11</p>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio
            asperiores illo a, harum, ab libero consequatur architecto fugiat
            inventore molestiae suscipit rerum possimus quos ut officiis
            voluptatem accusantium beatae.
          </p>
        </div>
      </div>
      <div className="reivew-content">
        <div style={{ display: "flex" }}>
          <div>
            <Star width={20} height={20} />
            <Star width={20} height={20} />
            <Star width={20} height={20} />
            <Star width={20} height={20} />
          </div>
          <div style={{ display: "flex" }}>
            <p>홍길동</p>
            <p>2022-09-11</p>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio
            asperiores illo a, harum, ab libero consequatur architecto fugiat
            inventore molestiae suscipit rerum possimus quos ut officiis
            voluptatem accusantium beatae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
