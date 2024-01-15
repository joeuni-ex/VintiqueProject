import "./CartItem.css";
import { FaTrash } from "react-icons/fa";

const CartItem = () => {
  return (
    <div className="cart-item-container">
      <div className="cart-item-contents" style={{ flex: "0.4" }}>
        <div className="cart-item-image-container">
          <img src="" alt="productImg" />
        </div>
        <div>
          <p>ProductName</p>
        </div>
      </div>
      <div className="cart-item-contents-center" style={{ flex: "0.2" }}>
        Price
      </div>
      <div className="cart-item-contents-center" style={{ flex: "0.1" }}>
        <div className="cart-item-quantity">1</div>
      </div>
      <div className="cart-item-contents-center" style={{ flex: "0.2" }}>
        Subtotal
      </div>
      <div className="cart-item-contents-center" style={{ flex: "0.1" }}>
        <FaTrash className="cart-item-icon" />
      </div>
    </div>
  );
};

export default CartItem;
