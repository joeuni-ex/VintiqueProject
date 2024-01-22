import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import Pagination from "../../components/pagination/Pagination";
import MyPageCate from "../../components/userCategory/MyPageCate";
import "./UserPage.css";
import orderService from "../../services/order.service";
import reviewService from "../../services/review.service";
import ReviewList from "../../components/review/reviewList";

const UserReview = () => {
  const title = "MyPage";
  const [page, setPage] = useState(0);
  const maxPageSize = 12; //한 페이지에 출력할 게시물 개수
  const [totalPage, setTotalPage] = useState(0);
  const [reviewList, setReviewList] = useState([]);

  //모든 주문 목록 가져오기
  useEffect(() => {
    const fetchData = async () => {
      reviewService.getReviewByUserId(page, maxPageSize).then((response) => {
        setReviewList(response.data.content);
        setPage(response.data.pageable.pageNumber); // 현재 페이지
        setTotalPage(response.data.pageable.pageSize); //총 페이지
      });
    };
    fetchData();
  }, [page]);

  console.log(reviewList);
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
            <tbody>
              {reviewList &&
                reviewList.map((review, idx) => (
                  <ReviewList review={review} idx={idx} />
                ))}
            </tbody>
          </table>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default UserReview;
