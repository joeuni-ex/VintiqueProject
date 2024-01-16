import { useEffect, useState } from "react";
import "./CartItem.css";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ product }) => {
  return (
    <div className="cart-item-container">
      <div className="cart-item-contents" style={{ flex: "0.4" }}>
        <div className="cart-item-image-container">
          <img src={product?.mainImage} alt="productImg" />
        </div>
        <div>
          <p>{product?.name}</p>
        </div>
      </div>
      <div className="cart-item-contents-center" style={{ flex: "0.2" }}>
        {product?.price.toLocaleString("ko-KR")}
      </div>
      <div className="cart-item-contents-center" style={{ flex: "0.1" }}>
        <div className="cart-item-quantity">{product?.insertQuantity}</div>
      </div>
      <div className="cart-item-contents-center" style={{ flex: "0.2" }}>
        {(product?.price * product?.insertQuantity)?.toLocaleString("ko-KR")}
      </div>
      <div className="cart-item-contents-center" style={{ flex: "0.1" }}>
        <FaTrash className="cart-item-icon" />
      </div>
    </div>
  );
};

export default CartItem;
