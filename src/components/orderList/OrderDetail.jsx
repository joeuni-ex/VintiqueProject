import { Link } from "react-router-dom";
import "./OrderDetail.css";
const OrderDetail = ({ item, isMyPage, createReviewRequest }) => {
  return (
    <div className="order-detail">
      <div style={{ flex: 0.2 }}>
        <p style={{ fontSize: "0.9rem", fontWeight: 500 }}>
          주문번호: {item?.id}
        </p>
      </div>

      <Link to={`/product/${item?.productId}`}>
        <div className="order-page-product-img">
          <img src={item.mainImage} alt="" />
        </div>
      </Link>
      <div style={{ flex: 0.2 }}>
        <Link
          style={{
            fontSize: "0.9rem",
            fontWeight: 500,
            textDecoration: "none",
          }}
          to={`/product/${item?.productId}`}
        >
          {item?.name}
        </Link>
      </div>
      <div style={{ flex: 0.25 }}>
        <p style={{ fontSize: "0.9rem", fontWeight: 500 }}>
          제품가격 : {item?.price.toLocaleString("ko-KR")}원
        </p>
      </div>
      <div style={{ flex: 0.15 }}>
        <p style={{ fontSize: "0.9rem", fontWeight: 500 }}>
          수량 : {item?.quantity}개
        </p>
      </div>
      <div style={{ flex: 0.15 }}>
        <p style={{ fontSize: "0.9rem", fontWeight: 500 }}>
          합계 : {item?.price * item?.quantity}원
        </p>
      </div>
      {isMyPage ? (
        <div style={{ flex: 0.15 }}>
          {item?.writtenReview === false ? (
            <p
              onClick={() => createReviewRequest(item.productId, item.id)}
              style={{ fontSize: "0.9rem", fontWeight: 500, cursor: "pointer" }}
            >
              리뷰작성
            </p>
          ) : (
            <p
              style={{ fontSize: "0.9rem", fontWeight: 500, cursor: "pointer" }}
            >
              리뷰 작성완료
            </p>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default OrderDetail;
