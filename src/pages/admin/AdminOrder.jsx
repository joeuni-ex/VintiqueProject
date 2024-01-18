import { Link } from "react-router-dom";
import ProductList from "../../components/productList/ProductList";
import AdminCate from "../../components/userCategory/AdminCate";
import "./AdminPage.css";
import { useEffect, useState } from "react";
import OrderList from "../../components/orderList/OrderList";
import Pagination from "../../components/pagination/Pagination";
import orderService from "../../services/order.service";

// TODO 주문 관리 페이지 -> GET Purchase
const AdminOrder = () => {
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [orderList, setOrderList] = useState([]);

  const maxPageSize = 5; //한 페이지에 출력할 게시물 개수

  useEffect(() => {
    orderService.getAllOrder(page, maxPageSize).then((response) => {
      setOrderList(response.data.content);
      setPage(response.data.pageable.pageNumber); // 현재 페이지
      setTotalPage(response.data.pageable.pageSize); //총 페이지
    });
  }, [page]);

  console.log(orderList);

  return (
    <div className="basic-container base-color">
      {/* <Banner title={title} /> */}
      <div className="userPage">
        <AdminCate select="1" />
        <div className="user-content">
          <p>주문 관리</p>
          <div
            style={{ display: "flex", width: "100%", justifyContent: "end" }}
          >
            <Link to="/admin/add-product" style={{ textDecoration: "none" }}>
              <div
                className="basic-btn brown-btn"
                style={{ marginBottom: "10px" }}
              >
                <div>
                  <p style={{ fontSize: "1rem" }}> 제품 추가</p>
                </div>
              </div>
            </Link>
          </div>

          <table>
            <thead>
              <tr>
                <th>고객번호</th>
                <th>고객명</th>
                <th>구매제품</th>
                <th>가격</th>
                <th>주문일자</th>
                <th>배송상태</th>
              </tr>
            </thead>
            <tbody>
              {orderList?.map((order, idx) => (
                <OrderList key={idx} order={order} idx={order.idx} />
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
