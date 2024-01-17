import "./OrderSuccess.css";

const OrderSuccess = () => {
  return (
    <div className="basic-container">
      <div className="order-page-container">
        <div className="order-page-title">주문/결제</div>
        <div className="divider"></div>
        <div className="order-page-result-container">
          <div className="order-page-result-left">
            <div className="order-page-result-left-title">
              <span>주문이 정상적으로 완료</span>되었습니다.
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="order-page-result-right">주문 영수증 </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
