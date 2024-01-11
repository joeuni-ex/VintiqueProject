import React, { useEffect, useState } from "react";
import AdminCate from "../../components/userCategory/AdminCate";
import ProductList from "../../components/productList/ProductList";
import { Link } from "react-router-dom";
import productService from "../../services/product.service";

// TODO 제품 관리 페이지 -> GET Product
const AdminProduct = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    productService.getAllProducts().then((response) => {
      setProductList(response.data);
    });
  }, []);

  console.log(productList);
  return (
    <div className="basic-container base-color">
      {/* <Banner title={title} /> */}
      <div className="userPage">
        <AdminCate select="2" />
        <div className="user-content">
          <p>제품 관리</p>
          <div
            style={{ display: "flex", width: "100%", justifyContent: "end" }}
          >
            <Link to="/admin/add-product">
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
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
