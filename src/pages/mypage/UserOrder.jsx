import React, { useEffect, useRef, useState } from "react";
import Banner from "../../components/banner/Banner";
import "./UserPage.css";

import MyPageCate from "../../components/userCategory/MyPageCate";
import OrderListUser from "../../components/orderList/OrderListUser";
import orderService from "../../services/order.service";
import Pagination from "../../components/pagination/Pagination";
import OrderDetail from "../../components/orderList/OrderDetail";
import Review from "../../model/Review";
import ReviewSave from "../../components/review/ReviewSave";

const UserOrder = () => {
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const maxPageSize = 12; //한 페이지에 출력할 게시물 개수
  const [orderList, setOrderList] = useState([]);
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(null); //주문 상세 인덱스
  const [orderDetails, setOrderDetails] = useState([]);
  const [isMyPage, setIsMyPage] = useState(true);
  const saveComponent = useRef(); //리뷰 추가 모달창

  const [selectedProduct, setSelectedProduct] = useState(""); //선택한 제품의 리뷰
  const [selectedOrderItemId, setSelectedOrderItemId] = useState(""); //리뷰 작성할 주문 아이템 ID

  //모든 주문 목록 가져오기
  useEffect(() => {
    const fetchData = async () => {
      orderService.getMyOrder(page, maxPageSize).then((response) => {
        const updatedOrderList = response.data.content.map((order) => {
          return { ...order, key: order.id };
        });
        setOrderList(updatedOrderList);
        setPage(response.data.pageable.pageNumber); // 현재 페이지
        setTotalPage(response.data.pageable.pageSize); //총 페이지
      });
    };
    fetchData();
  }, [page]);

  // 주문 상세 보여주기
  const toggleDetails = (index, orderId) => {
    setSelectedOrderIndex(index === selectedOrderIndex ? null : index);

    orderService
      .getMyOrderView(orderId)
      .then((res) => setOrderDetails(res.data));
  };

  // 리뷰 작성 버튼 클릭 시
  const createReviewRequest = (productId, orderItemId) => {
    setSelectedProduct(productId); //  버튼을 클릭하면 해당 제품id를 매개변수로 받아와서 저장
    setSelectedOrderItemId(orderItemId);
    saveComponent.current?.showProductModal(); // ProductSave 컴포넌트의 showProductModal()함수를 실행하여 모달창을 띄운다.
  };

  return (
    <div className="basic-container">
      {/* 배너 */}
      <Banner title="MyPage" />
      <div className="userPage">
        <MyPageCate select="1" />
        <div className="user-content">
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
              {orderList.length === 0 && (
                <tr>
                  <td colSpan="6">
                    <div className="order-detail">
                      <p style={{ marginLeft: "50px" }}>
                        주문 내역이 존재하지 않습니다.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
              {orderList?.map((order, idx) => (
                <React.Fragment key={idx}>
                  <OrderListUser
                    order={order}
                    idx={idx}
                    onDetail={() => toggleDetails(idx, order.id)}
                  />
                  {selectedOrderIndex === idx && (
                    <tr>
                      <td colSpan="7">
                        {orderDetails?.map((item, itemIdx) => (
                          <OrderDetail
                            createReviewRequest={createReviewRequest}
                            key={itemIdx}
                            item={item}
                            isMyPage={isMyPage}
                          />
                        ))}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          <Pagination page={page} setPage={setPage} totalPage={totalPage} />
        </div>
        <ReviewSave
          ref={saveComponent}
          product={selectedProduct}
          orderItemId={selectedOrderItemId}
        />
      </div>
    </div>
  );
};

export default UserOrder;
