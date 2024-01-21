import Banner from "../../components/banner/Banner";
import MyPageCate from "../../components/userCategory/MyPageCate";
import "./UserPage.css";

const UserReview = () => {
  const title = "MyPage";
  return (
    <div className="basic-container">
      {/* 배너 */}
      {<Banner title={title} />}
      <div className="userPage">
        <MyPageCate select="2" />
        <div className="user-content">
          <div
            style={{ display: "flex", width: "100%", justifyContent: "end" }}
          ></div>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>주문정보</th>
                <th>가격</th>
                <th>주문일자</th>
                <th>배송상태</th>
                <th></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
