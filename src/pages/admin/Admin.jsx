import { useState } from "react";
import Banner from "../../components/banner/Banner";
import "./Admin.css";

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
            <li onClick={() => categoryChange("상품 등록하기")}>
              상품 등록하기
            </li>
            <li onClick={() => categoryChange("권한 변경")}>권한 변경</li>
          </ul>
        </div>
        <div className="user-content">
          <p>{selectCategory}</p>

          <div className="test">
            <table></table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
