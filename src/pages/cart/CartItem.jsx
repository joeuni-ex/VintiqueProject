import "./CartItem.css";
import { FaTrash } from "react-icons/fa";
import cartService from "../../services/cart.service";

const CartItem = ({ product, onDelete }) => {
  const handleDeleteCart = (cartId) => {
    if (confirm("장바구니에서 해당 제품을 삭제하시겠습니까?")) {
      onDelete(cartId); //부모 컴포넌트에 있는 함수 콜백
    }
  };

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
        <FaTrash
          onClick={() => handleDeleteCart(product.cartItemId)}
          className="cart-item-icon"
        />
      </div>
    </div>
  );
};

export default CartItem;
