import { useState } from "react";
import Banner from "../../components/banner/Banner";
import "./Admin.css";
import AddProduct from "../../components/addProduct/addProduct";
import OrderList from "../../components/orderList/OrderList";

const Admin = () => {
  const [selectCategory, setSelectCategory] = useState("주문 리스트");

  const categoryChange = (title) => {
    setSelectCategory(title);
  };
  const title = "AdminPage";
  return (
    <div className="shopContainer">
      <Banner title={title} />
      <div className="userPage">
        <div className="user-category">
          <ul className="list">
            <li onClick={() => categoryChange("주문 리스트")}>주문 리스트</li>
            <li onClick={() => categoryChange("제품 등록")}>제품 등록</li>
            <li onClick={() => categoryChange("권한 변경")}>권한 변경</li>
          </ul>
        </div>
        <div className="user-content">
          <p>{selectCategory}</p>

          <div className="test">
            {selectCategory === "주문 리스트" ? <OrderList /> : ""}
            {selectCategory === "제품 등록" ? <AddProduct /> : ""}
            {selectCategory === "권한 변경" ? <AddProduct /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
