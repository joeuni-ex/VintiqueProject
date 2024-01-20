import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyPageCate = ({ select }) => {
  const [selected, setSelected] = useState("");
  useEffect(() => {
    setSelected(select);
  }, [select]);

  return (
    <div className="user-category ">
      <p>마이페이지</p>
      <ul className="list">
        <Link
          className={selected === "1" ? "selected" : "list-link"}
          to="/user/order"
        >
          <li>주문 관리</li>
        </Link>
        <Link
          className={selected === "2" ? "selected" : "list-link"}
          to="/user/review"
        >
          <li>리뷰 관리</li>
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

export default MyPageCate;
