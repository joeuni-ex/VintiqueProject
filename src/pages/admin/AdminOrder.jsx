import { Link } from "react-router-dom";
import ProductList from "../../components/productList/ProductList";
import AdminCate from "../../components/userCategory/AdminCate";
import "./AdminPage.css";
import React, { useEffect, useState } from "react";
import OrderList from "../../components/orderList/OrderList";
import Pagination from "../../components/pagination/Pagination";
import orderService from "../../services/order.service";
import OrderDetail from "../../components/orderList/OrderDetail";
import Banner from "../../components/banner/Banner";

// TODO 주문 관리 페이지 -> GET Purchase
const AdminOrder = () => {
  const title = "AdminPage"; //배너 타이틀
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [orderList, setOrderList] = useState([]);
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(null); //주문 상세 인덱스
  const [orderDetails, setOrderDetails] = useState([]);

  const maxPageSize = 12; //한 페이지에 출력할 게시물 개수

  useEffect(() => {
    const fetchData = async () => {
      orderService.getAllOrder(page, maxPageSize).then((response) => {
        const updatedOrderList = response.data.content.map((order) => {
          return { ...order, key: order.id }; // add a unique key
        });
        setOrderList(updatedOrderList);
        setPage(response.data.pageable.pageNumber); // 현재 페이지
        setTotalPage(response.data.pageable.pageSize); //총 페이지
      });
    };
    fetchData();
  }, [page]);

  //상태 변경 시 리랜더링
  const handleStatusChange = (orderId, newStatus) => {
    const updatedOrderList = orderList.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrderList(updatedOrderList);
  };

  // 주문 상세 보여주기
  const toggleDetails = (index, orderId) => {
    setSelectedOrderIndex(index === selectedOrderIndex ? null : index);

    orderService
      .getMyOrderView(orderId)
      .then((res) => setOrderDetails(res.data));
  };

  return (
    <div className="basic-container base-color">
      {/* 배너 */}
      {<Banner title={title} />}
      <div className="userPage">
        <AdminCate select="1" />
        <div className="user-content">
          {/* <p>주문 관리</p> */}
          <div
            style={{ display: "flex", width: "100%", justifyContent: "end" }}
          ></div>

          <table>
            <thead>
              <tr>
                <th>고객번호</th>
                <th>고객명</th>
                <th>주문정보</th>
                <th>가격</th>
                <th>주문일자</th>
                <th>주문상태</th>
                <th>옵션</th>
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
                          <OrderDetail key={itemIdx} item={item} />
                        ))}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          <Pagination page={page} setPage={setPage} totalPage={totalPage} />
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
