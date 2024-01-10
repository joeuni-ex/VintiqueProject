import React from "react";
import AdminCate from "../../components/userCategory/AdminCate";

const AdminProduct = () => {
  return (
    <div className="shopContainer">
      {/* <Banner title={title} /> */}
      <div className="userPage">
        <AdminCate />
        <div className="user-content">
          <p>제품 관리</p>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;