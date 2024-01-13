import { Link } from "react-router-dom";
import ProductList from "../../components/productList/ProductList";
import AdminCate from "../../components/userCategory/AdminCate";
import "./AdminOrder.css";

// TODO 주문 관리 페이지 -> GET Purchase
const AdminOrder = () => {
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
            <Link to="/admin/add-product">
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
                <th>배송상태</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
