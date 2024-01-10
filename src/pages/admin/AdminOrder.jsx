import Banner from "../../components/banner/Banner";
import AdminCate from "../../components/userCategory/AdminCate";
import "./AdminOrder.css";

const AdminOrder = () => {
  return (
    <div className="shopContainer">
      {/* <Banner title={title} /> */}
      <div className="userPage">
        <AdminCate />
        <div className="user-content">
          <p>주문 관리</p>
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
