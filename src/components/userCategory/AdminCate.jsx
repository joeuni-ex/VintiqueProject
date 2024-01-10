import { Link } from "react-router-dom";

const AdminCate = () => {
  return (
    <div className="user-category">
      <ul className="list">
        <Link to="/admin/order">
          <li>주문 관리</li>
        </Link>
        <Link to="/admin/product">
          <li>제품 관리</li>
        </Link>
        <Link to="/admin/role">
          <li>권한 관리</li>
        </Link>
      </ul>
    </div>
  );
};

export default AdminCate;
