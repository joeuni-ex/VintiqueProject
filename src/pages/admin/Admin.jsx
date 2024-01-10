import { useState } from "react";
import Banner from "../../components/banner/Banner";
import "./Admin.css";
import AddProduct from "../../components/addProduct/addProduct";
import OrderList from "../../components/orderList/OrderList";
import RoleChange from "./RoleChange";

const Admin = () => {
  const [selectCategory, setSelectCategory] = useState("주문 리스트");

  const categoryChange = (title) => {
    setSelectCategory(title);
  };
  const title = "AdminPage";
  return (
    <div className="shopContainer">
      {/* <Banner title={title} /> */}
      <div className="userPage">
        <div className="user-category">
          <ul className="list">
            <li onClick={() => categoryChange("주문 리스트")}>주문 관리</li>
            <li onClick={() => categoryChange("제품 등록")}>제품 관리</li>
            <li onClick={() => categoryChange("권한 변경")}>권한 관리</li>
          </ul>
        </div>
        <div className="user-content">
          <p>{selectCategory}</p>

          <div className="test">
            {selectCategory === "주문 관리" ? <OrderList /> : ""}
            {selectCategory === "제품 관리" ? <AddProduct /> : ""}
            {selectCategory === "권한 변경" ? <RoleChange /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
