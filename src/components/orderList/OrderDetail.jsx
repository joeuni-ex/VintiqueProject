import "./OrderDetail.css";
const OrderDetail = ({ item, isMyPage, createReviewRequest }) => {
  return (
    <div className="order-detail">
      <div style={{ flex: 0.2 }}>
        <p style={{ fontSize: "0.9rem", fontWeight: 500 }}>
          주문번호: {item?.id}
        </p>
      </div>

      <div className="order-page-product-img">
        <img src={item.mainImage} alt="" />
      </div>
      <div style={{ flex: 0.3 }}>
        <p style={{ fontSize: "0.9rem", fontWeight: 500 }}> {item?.name}</p>
      </div>
      <div style={{ flex: 0.2 }}>
        <p style={{ fontSize: "0.9rem", fontWeight: 500 }}>
          제품가격 : {item?.price.toLocaleString("ko-KR")}원
        </p>
      </div>
      <div style={{ flex: 0.1 }}>
        <p style={{ fontSize: "0.9rem", fontWeight: 500 }}>
          수량 : {item?.quantity}개
        </p>
      </div>
      <div style={{ flex: 0.2 }}>
        <p style={{ fontSize: "0.9rem", fontWeight: 500 }}>
          합계 : {item?.price * item?.quantity}원
        </p>
      </div>
      {isMyPage ? (
        <div
          onClick={() => createReviewRequest(item.productId)}
          style={{ flex: 0.1 }}
        >
          <p style={{ fontSize: "0.9rem", fontWeight: 500, cursor: "pointer" }}>
            리뷰작성
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default OrderDetail;
