import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import "./MyPage.css";

import MyPageCate from "../../components/userCategory/MyPageCate";
import OrderList from "../../components/orderList/OrderList";
import OrderListUser from "../../components/orderList/OrderListUser";

const MyPage = () => {
  const title = "MyPage";

  const [orderList, setOrderList] = useState([]);
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(null); //주문 상세 인덱스
  const [orderDetails, setOrderDetails] = useState([]);

  // 주문 상세 보여주기
  const toggleDetails = (index, orderId) => {
    setSelectedOrderIndex(index === selectedOrderIndex ? null : index);

    orderService
      .getMyOrderView(orderId)
      .then((res) => setOrderDetails(res.data));
  };

  return (
    <div className="basic-container">
      {/* 배너 */}
      {<Banner title={title} />}
      <div className="userPage">
        <MyPageCate select="1" />
        <div className="user-content">
          <div
            style={{ display: "flex", width: "100%", justifyContent: "end" }}
          ></div>

          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>주문정보</th>
                <th>가격</th>
                <th>주문일자</th>
                <th>배송상태</th>
              </tr>
            </thead>
            <tbody>
              {orderList?.map((order, idx) => (
                <React.Fragment key={idx}>
                  <OrderList
                    order={order}
                    idx={idx}
                    onStatusChange={handleStatusChange}
                    onDetail={() => toggleDetails(idx, order.id)}
                  />
                  {selectedOrderIndex === idx && (
                    <tr>
                      <td colSpan="7">
                        {orderDetails?.map((item, itemIdx) => (
                          <OrderListUser key={itemIdx} item={item} />
                        ))}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          {/* / <Pagination page={page} setPage={setPage} totalPage={totalPage} /> */}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
