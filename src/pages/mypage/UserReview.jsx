import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Banner from "../../components/banner/Banner";
import Pagination from "../../components/pagination/Pagination";
import MyPageCate from "../../components/userCategory/MyPageCate";
import "./UserPage.css";
import reviewService from "../../services/review.service";
import { Link } from "react-router-dom";
import Star from "../../components/rate/Star";
import Star3 from "../../components/rate/Star3";

const UserReview = () => {
  const title = "MyPage";
  const [page, setPage] = useState(0);
  const maxPageSize = 12; //한 페이지에 출력할 게시물 개수
  const [totalPage, setTotalPage] = useState(0);
  const [reviewList, setReviewList] = useState([]);

  //모든 주문 목록 가져오기
  const fetchData = async () => {
    await reviewService
      .getReviewByUserId(page, maxPageSize)
      .then((response) => {
        setReviewList(response.data.content);
        setPage(response.data.pageable.pageNumber); // 현재 페이지
        setTotalPage(response.data.pageable.pageSize); //총 페이지
      });
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  console.log(reviewList);

  const handleDeleteReview = (reivewId) => {
    if (confirm("해당 리뷰를 삭제하시겠습니까?")) {
      reviewService.deleteReview(reivewId).then(() => {
        fetchData(); // 다시 리뷰 목록 가져오기
      });
    }
  };

  const handleModifyReview = () => {
    console.log("클릭함");
  };

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
                <th>내가 작성한 리뷰</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="7">
                  {reviewList &&
                    reviewList.map((review, index) => (
                      <div key={index} className="writen-review-container">
                        <div className="writen-review-product">
                          <Link to={`/product/${review?.productId}`}>
                            <div className="writen-review-product-img">
                              <img src={review?.mainImage} alt="" />
                            </div>
                          </Link>
                          <div className="writen-review-product-name">
                            <p>{review?.name}</p>
                          </div>
                        </div>
                        <div className="review-detail">
                          <div>
                            <div>
                              {Array.from({ length: review?.rate }).map(
                                (_, index) => (
                                  <Star3
                                    width={15}
                                    height={15}
                                    key={index}
                                    style={{ margin: "0px 1.5px" }}
                                  />
                                )
                              )}
                            </div>
                            <div style={{ margin: "10px 0" }}>
                              {review?.reviewContent}
                            </div>
                            <div>{review?.createTime}</div>
                          </div>
                          <div className="review-detail-btn-box">
                            <div
                              onClick={handleModifyReview}
                              className="review-detail-modify-btn"
                            >
                              <p>리뷰 수정</p>
                            </div>
                            <div className="review-detail-delete-btn">
                              <IoClose
                                style={{ cursor: "pointer" }}
                                onClick={() => handleDeleteReview(review.id)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination page={page} setPage={setPage} totalPage={totalPage} />
        </div>
      </div>
    </div>
  );
};

export default UserReview;
