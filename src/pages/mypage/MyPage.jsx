import React, { useEffect, useRef, useState } from "react";
import Banner from "../../components/banner/Banner";
import "./MyPage.css";

import MyPageCate from "../../components/userCategory/MyPageCate";
import OrderListUser from "../../components/orderList/OrderListUser";
import orderService from "../../services/order.service";
import Pagination from "../../components/pagination/Pagination";
import OrderDetail from "../../components/orderList/OrderDetail";
import Review from "../../model/Review";
import ReviewSave from "../../components/review/ReviewSave";

const MyPage = () => {
  const title = "MyPage";
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [orderList, setOrderList] = useState([]);
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(null); //주문 상세 인덱스
  const [orderDetails, setOrderDetails] = useState([]);
  const [isMyPage, setIsMyPage] = useState(true);
  const saveComponent = useRef(); //리뷰 추가 모달창

  const [selectedProduct, setSelectedProduct] = useState(""); //선택한 제품의 리뷰

  //모든 주문 목록 가져오기
  useEffect(() => {
    const fetchData = async () => {
      orderService.getMyOrder(page, maxPageSize).then((response) => {
        const updatedOrderList = response.data.content.map((order) => {
          return { ...order, key: order.id }; // add a unique key
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
  const createReviewRequest = (productId) => {
    setSelectedProduct(productId); //  버튼을 클릭하면 해당 제품id를 매개변수로 받아와서 저장
    saveComponent.current?.showProductModal(); // ProductSave 컴포넌트의 showProductModal()함수를 실행하여 모달창을 띄운다.
  };
  const maxPageSize = 12; //한 페이지에 출력할 게시물 개수

  // 제품 데이터를 가져와서 리스트에 추가 -> 모달창으로 전달해서 저장할 수 있도록
  // const saveProductWatcher = (product) => {
  //   let itemIndex = productList.findIndex((item) => item.id === product.id);
  //   //productList에 선택한 제품과 같은 번호가 있을 경우
  //   // 기존 제품 수정
  //   if (itemIndex !== -1) {
  //     const newList = productList.map((item) => {
  //       if (item.id === product.id) {
  //         return product; //입력된 product -> 수정
  //       }
  //       return item;
  //     });
  //     setProductList(newList);
  //   } else {
  //     // 새로 추가
  //     const newList = productList.concat(product);
  //     setProductList(newList); //리스트 업데이트
  //   }
  // };

  console.log(selectedProduct);
  return (
    <div className="basic-container">
      {/* 배너 */}
      {<Banner title={title} />}
      <div className="userPage">
        <MyPageCate select="1" />
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
          // onSaved={(p) => saveProductWatcher(p)}
        />
      </div>
    </div>
  );
};

export default MyPage;
