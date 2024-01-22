import { useEffect, useState } from "react";
import OrderProduct from "../../components/orderList/OrderProduct";
import "./OrderSuccess.css";
import { useNavigate, useParams } from "react-router-dom";
import orderService from "../../services/order.service";

const OrderSuccess = () => {
  const { id } = useParams(); //주소 변수 path Variable
  const [orderView, setOrderView] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await orderService.getMyOrderView(id);
        const productData = response.data;
        setOrderView(productData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log(orderView);

  const shopBtn = () => {
    navigate("/shop");
  };
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
            <div onClick={shopBtn} className="order-page-result-left-Btn">
              쇼핑계속하기
            </div>
          </div>
          <div className="order-page-result-right">
            {orderView &&
              orderView.map((order, index) => (
                <OrderProduct key={index} order={order} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
