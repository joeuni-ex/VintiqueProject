import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import "./MyPage.css";

import MyPageCate from "../../components/userCategory/MyPageCate";
import OrderList from "../../components/orderList/OrderList";

const MyPage = () => {
  const title = "MyPage";

  return (
    <div className="basic-container">
      {/* 배너 */}
      {<Banner title={title} />}
      <div className="userPage">
        <MyPageCate select="1" />
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
                <th>구매제품</th>
                <th>가격</th>
                <th>주문일자</th>
                <th>배송상태</th>
              </tr>
            </thead>
            <tbody>
              <OrderList />
            </tbody>
          </table>
          {/* / <Pagination page={page} setPage={setPage} totalPage={totalPage} /> */}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
