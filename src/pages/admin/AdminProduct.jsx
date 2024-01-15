import React, { useEffect, useState } from "react";
import AdminCate from "../../components/userCategory/AdminCate";
import ProductList from "../../components/productList/ProductList";
import { Link } from "react-router-dom";
import productService from "../../services/product.service";
import Pagination from "../../components/pagination/Pagination";

// TODO 제품 관리 페이지 -> GET Product
const AdminProduct = () => {
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [productList, setProductList] = useState([]);

  const maxPageSize = 5;

  useEffect(() => {
    productService.getAllProducts(page, maxPageSize).then((response) => {
      setProductList(response.data.content);
      setPage(response.data.pageable.pageNumber); // 현재 페이지
      setTotalPage(response.data.pageable.pageSize); //총 페이지
      //console.log(response.data);
    });
  }, [page]);

  console.log(productList);

  return (
    <div className="basic-container base-color">
      {/* <Banner title={title} /> */}
      <div className="userPage">
        <AdminCate select="2" />
        <div className="user-content">
          <div>
            <p style={{ textAlign: "center" }}>제품 관리</p>
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
                  <th></th>
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
