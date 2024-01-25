import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import SignUp from "./pages/signup/SignUp";
import ProductDetails from "./pages/productDetails/ProductDetails";
import RoleChange from "./pages/admin/RoleChange";
import AdminOrder from "./pages/admin/AdminOrder";
import AdminProduct from "./pages/admin/AdminProduct";
import AuthGuard from "./guards/AuthGuard";
import { Role } from "./model/Role";
import AddProduct from "./pages/admin/AddProduct";
import ModifyProduct from "./pages/admin/ModifyProduct";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import OrderSuccess from "./pages/order/OrderSuccess";
import UserOrder from "./pages/mypage/UserOrder";
import UserReview from "./pages/mypage/UserReview";
import NotFound from "./pages/error/NotFound";
import UnAuthorized from "./pages/error/UnAuthorized";
import About from "./pages/about/About";
import UserInterest from "./pages/mypage/UserInterest";
import UserRoleChange from "./pages/mypage/UserRoleChange";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* 라우팅 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
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
          path="/modify-product/:id"
          element={
            <AuthGuard roles={[Role.ADMIN]}>
              <ModifyProduct />
            </AuthGuard>
          }
        ></Route>
        <Route
          path="/role-change"
          element={
            <AuthGuard roles={[Role.ADMIN, Role.USER]}>
              <RoleChange />
            </AuthGuard>
          }
        />
        <Route
          path="/user/order"
          element={
            <AuthGuard roles={[Role.ADMIN, Role.USER]}>
              <UserOrder />
            </AuthGuard>
          }
        />
        <Route
          path="/user/review"
          element={
            <AuthGuard roles={[Role.ADMIN, Role.USER]}>
              <UserReview />
            </AuthGuard>
          }
        />
        <Route
          path="/user/interest"
          element={
            <AuthGuard roles={[Role.ADMIN, Role.USER]}>
              <UserInterest />
            </AuthGuard>
          }
        />
        <Route
          path="/user/role"
          element={
            <AuthGuard roles={[Role.ADMIN, Role.USER]}>
              <UserRoleChange />
            </AuthGuard>
          }
        />
        <Route
          path="/cart"
          element={
            <AuthGuard roles={[Role.ADMIN, Role.USER]}>
              <Cart />
            </AuthGuard>
          }
        />
        <Route
          path="/order/success/:id"
          element={
            <AuthGuard roles={[Role.ADMIN, Role.USER]}>
              <OrderSuccess />
            </AuthGuard>
          }
        />
        <Route path="/404" element={<NotFound />} />
        <Route path="/401" element={<UnAuthorized />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
