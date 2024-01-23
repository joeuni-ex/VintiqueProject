import Banner from "../../components/banner/Banner";
import Pagination from "../../components/pagination/Pagination";
import MyPageCate from "../../components/userCategory/MyPageCate";
import { IoClose } from "react-icons/io5";
import "./UserPage.css";
import { useEffect, useState } from "react";
import interestService from "../../services/interest.service";
import { Link } from "react-router-dom";

const UserInterest = () => {
  const title = "MyPage";
  const [page, setPage] = useState(0);
  const maxPageSize = 7; //한 페이지에 출력할 게시물 개수
  const [totalPage, setTotalPage] = useState(0);
  const [interestList, setInterestList] = useState([]);

  //유저 별 관심 제품 목록 가져오기
  const fetchData = async () => {
    interestService.getInterestByUserId(page, maxPageSize).then((response) => {
      setInterestList(response.data.content);
      setPage(response.data.pageable.pageNumber); // 현재 페이지
      setTotalPage(response.data.pageable.pageSize); //총 페이지
    });
  };
  //페이지 변경 때 마다 리랜더링
  useEffect(() => {
    fetchData();
  }, [page]);

  const handleInterestDelete = (productId) => {
    if (confirm("해당 제품을 관심 제품에서 제거하시겠습니까?")) {
      interestService.deleteInterest(productId).then(() => {
        fetchData(); // 다시 제품 가져오기
      });
    }
  };

  return (
    <div className="basic-container">
      {/* 배너 */}
      {<Banner title={title} />}
      <div className="userPage">
        <MyPageCate select="3" />
        <div className="user-content">
          <div
            style={{ display: "flex", width: "100%", justifyContent: "end" }}
          ></div>
          <table>
            <thead>
              <tr>
                <th>관심 제품</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="7">
                  {interestList &&
                    interestList.map((interest, index) => (
                      <div key={index} className="order-detail">
                        <div style={{ flex: 0.1 }}>
                          <p
                            style={{ fontSize: "0.9rem", fontWeight: 500 }}
                          ></p>
                        </div>
                        <Link to={`/product/${interest?.productId}`}>
                          <div className="interest-page-product-img">
                            <img src={interest.mainImage} alt="" />
                          </div>
                        </Link>

                        <div
                          className="interest-info-text"
                          style={{ flex: 0.8 }}
                        >
                          <p>{interest?.createTime}</p>
                          <p>{interest?.name}</p>
                          <p>
                            <span style={{ fontWeight: "600" }}>
                              {interest?.price.toLocaleString("ko-KR")}
                            </span>
                            원
                          </p>
                        </div>
                        <div
                          className="interest-delete-btn"
                          style={{ flex: 0.1 }}
                        >
                          <p
                            onClick={() =>
                              handleInterestDelete(interest?.productId)
                            }
                            style={{ fontSize: "1.2rem" }}
                          >
                            <IoClose />
                          </p>
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

export default UserInterest;
