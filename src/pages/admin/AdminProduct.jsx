import React, { useEffect, useState } from "react";
import AdminCate from "../../components/userCategory/AdminCate";
import ProductList from "../../components/productList/ProductList";
import { Link } from "react-router-dom";
import productService from "../../services/product.service";
import Pagination from "../../components/pagination/Pagination";
import Banner from "../../components/banner/Banner";

// TODO 제품 관리 페이지 -> GET Product
const AdminProduct = () => {
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [productList, setProductList] = useState([]);

  const maxPageSize = 5; //한 페이지에 출력할 게시물 개수

  useEffect(() => {
    productService.getAllProducts(page, maxPageSize).then((response) => {
      setProductList(response.data.content);
      setPage(response.data.pageable.pageNumber); // 현재 페이지
      setTotalPage(response.data.pageable.pageSize); //총 페이지
    });
  }, [page]);

  return (
    <div className="basic-container">
      {/* 배너 */}
      <Banner title="AdminPage" />
      <div className="userPage">
        <AdminCate select="2" />
        <div className="user-content">
          <div>
            {/* <p style={{ textAlign: "center" }}>제품 관리</p> */}
            <div
              style={{ display: "flex", width: "100%", justifyContent: "end" }}
            >
              <Link to="/admin/add-product" style={{ textDecoration: "none" }}>
                <div
                  className="basic-btn brown-btn"
                  style={{ marginBottom: "10px" }}
                >
                  <div>
                    <p style={{ fontSize: "1rem" }}> 제품 추가</p>
                  </div>
                </div>
              </Link>
            </div>

            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>카테고리</th>
                  <th>제품명</th>
                  <th>가격</th>
                  <th>재고</th>
                  <th>판매상태</th>
                  <th>옵션</th>
                </tr>
              </thead>
              <tbody>
                {productList?.map((product, idx) => (
                  <ProductList key={idx} product={product} idx={product.id} />
                ))}
              </tbody>
            </table>
          </div>
          <Pagination page={page} setPage={setPage} totalPage={totalPage} />
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
