import Banner from "../../components/banner/Banner";
import BottomBanner from "../../components/banner/BottomBanner";
import "./Cart.css";
import CartItem from "./CartItem";
const Cart = () => {
  return (
    <div className="basic-container ">
      <Banner title="Cart" subTitle="cart" />
      <div className="cart-container">
        <div className="cart-info-contents ">
          <div className="cart-info-contents-title">
            <div style={{ flex: "0.4" }}>Product</div>
            <div style={{ flex: "0.2" }}>Price</div>
            <div style={{ flex: "0.1" }}>Quantity</div>
            <div style={{ flex: "0.2" }}>Subtotal</div>
            <div style={{ flex: "0.1" }}></div>
          </div>
          <div>
            <CartItem />
          </div>
        </div>
        <div className="cart-totals-contents"></div>
      </div>
      <BottomBanner />
    </div>
  );
};

export default Cart;
