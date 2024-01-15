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
            <CartItem />
            <CartItem />
          </div>
        </div>
        <div className="cart-totals-contents">
          <div className="cart-totals-title">
            <p>Cart Totals</p>
          </div>
          <div className="cart-totals-text">
            <div>
              <p style={{ fontWeight: "bold" }}>Subtotal</p>
              <p>12000원</p>
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>배송비</p>
              <p>2,500원</p>
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>Total</p>
              <p style={{ fontWeight: "bold", color: "#b88e2f" }}>12000원</p>
            </div>
          </div>
          <div className="cart-totals-btn">
            <p>payment</p>
          </div>
        </div>
      </div>
      <BottomBanner />
    </div>
  );
};

export default Cart;
