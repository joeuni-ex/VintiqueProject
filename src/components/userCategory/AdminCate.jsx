import { Link } from "react-router-dom";
import "./AdminCate.css";
import { useEffect, useState } from "react";

const AdminCate = ({ select }) => {
  const [selected, setSelected] = useState("");
  useEffect(() => {
    setSelected(select);
  }, [select]);

  return (
    <div className="user-category ">
      <p>관리자페이지</p>
      <ul className="list">
        <Link
          className={selected === "1" ? "selected" : "list-link"}
          to="/admin/order"
        >
          <li>주문 관리</li>
        </Link>
        <Link
          className={selected === "2" ? "selected" : "list-link"}
          to="/admin/product"
        >
          <li>제품 관리</li>
        </Link>
        <Link
          className={selected === "3" ? "selected" : "list-link"}
          to="/role-change"
        >
          <li>권한 관리</li>
        </Link>
      </ul>
    </div>
  );
};

export default AdminCate;
