import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import BottomBanner from "../../components/banner/BottomBanner";
import "./Cart.css";
import CartItem from "./CartItem";
import cartService from "../../services/cart.service";
const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [subtotal, setSubtotal] = useState(0); //소계
  const [total, setTotal] = useState(0); // 총합

  useEffect(() => {
    cartService.getAllCart().then((response) => {
      setCarts(response.data);
    });
  }, []);

  useEffect(() => {
    //카트의 내용이 변경될 때마다 소계 재 계산
    const newSubtotal = carts.reduce((acc, product) => {
      return acc + product.price * product.insertQuantity;
    }, 0);

    setSubtotal(newSubtotal);
  }, [carts]);

  useEffect(() => {
    //소계가 변경될 때마다 총 합계 재 계산
    const shippingFee = 2500; // 배송비
    const newTotal = subtotal + shippingFee;
    setTotal(newTotal);
  }, [subtotal]);

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
            {carts &&
              carts.map((product, index) => (
                <CartItem key={index} product={product} />
              ))}
          </div>
        </div>
        <div className="cart-totals-contents">
          <div className="cart-totals-title">
            <p>Cart Totals</p>
          </div>
          <div className="cart-totals-text">
            <div>
              <p style={{ fontWeight: "bold" }}>Subtotal</p>
              <p>{subtotal.toLocaleString("ko-KR")}</p>
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>배송비</p>
              <p>2,500원</p>
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>Total</p>
              <p style={{ fontWeight: "bold", color: "#b88e2f" }}>
                {total.toLocaleString("ko-KR")}
              </p>
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
