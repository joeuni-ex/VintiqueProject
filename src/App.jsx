import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import SignUp from "./pages/signup/SignUp";
import Shop from "./pages/shop/shop";
import ProductDetails from "./pages/productDetails/ProductDetails";
import MyPage from "./pages/mypage/myPage";
import RoleChange from "./pages/admin/RoleChange";
import AdminOrder from "./pages/admin/AdminOrder";
import AdminProduct from "./pages/admin/AdminProduct";
import AuthGuard from "./guards/AuthGuard";
import { Role } from "./model/Role";
import AddProduct from "./pages/admin/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* 라우팅 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route
          path="/admin/order"
          element={
            <AuthGuard roles={[Role.ADMIN]}>
              <AdminOrder />
            </AuthGuard>
          }
        />
        <Route
          path="/admin/product"
          element={
            <AuthGuard roles={[Role.ADMIN]}>
              <AdminProduct />
            </AuthGuard>
          }
        />
        <Route
          path="/admin/add-product"
          element={
            <AuthGuard roles={[Role.ADMIN]}>
              <AddProduct />
            </AuthGuard>
          }
        />
        <Route
          path="/role-change"
          element={
            <AuthGuard roles={[Role.ADMIN, Role.USER]}>
              <RoleChange />
            </AuthGuard>
          }
        />
        <Route
          path="/mypage"
          element={
            <AuthGuard roles={[Role.ADMIN, Role.USER]}>
              <MyPage />
            </AuthGuard>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
