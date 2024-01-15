import "./CartItem.css";
import { FaTrash } from "react-icons/fa";

const CartItem = () => {
  return (
    <div className="cart-item-container">
      <div className="cart-item-contents" cstyle={{ flex: "0.5" }}>
        <div className="cart-item-image-container">
          <img src="" alt="productImg" />
        </div>
        <p>ProductName</p>
      </div>
      <div className="cart-item-contents" style={{ flex: "0.2" }}>
        Price
      </div>
      <div className="cart-item-contents" style={{ flex: "0.1" }}>
        Quantity
      </div>
      <div className="cart-item-contents" style={{ flex: "0.2" }}>
        Subtotal
      </div>
      <div className="cart-item-contents" style={{ flex: "0.1" }}>
        <FaTrash />
      </div>
    </div>
  );
};

export default CartItem;
