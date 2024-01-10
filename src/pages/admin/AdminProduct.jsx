import React from "react";
import AdminCate from "../../components/userCategory/AdminCate";
import ProductList from "../../components/productList/ProductList";

// TODO 제품 관리 페이지 -> GET Product
const AdminProduct = () => {
  return (
    <div className="shopContainer">
      {/* <Banner title={title} /> */}
      <div className="userPage">
        <AdminCate select="2" />
        <div className="user-content">
          <p>제품 관리</p>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
              <ProductList />
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
