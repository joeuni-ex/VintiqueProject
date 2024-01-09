import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import SignUp from "./pages/signup/SignUp";
import Shop from "./pages/shop/shop";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Admin from "./pages/admin/Admin";
import MyPage from "./pages/mypage/myPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* 라우팅 */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/product-details" element={<ProductDetails />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
