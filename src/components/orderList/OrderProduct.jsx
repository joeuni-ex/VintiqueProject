const OrderProduct = ({ order }) => {
  return (
    <div className="order-page-product">
      <div className="order-page-product-img">
        <img src={order?.mainImage} alt="" />
      </div>
      <div className="order-page-product-info">
        <p>{order?.name}</p>
        <p>제품 가격 {order?.price.toLocaleString("ko-KR")}원</p>
        <p>주문 수량 : {order?.quantity}</p>
      </div>
    </div>
  );
};

export default OrderProduct;
