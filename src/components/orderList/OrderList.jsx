import React from "react";
import { Link } from "react-router-dom";

const OrderList = ({ order }) => {
  return (
    <tr>
      <td>{order?.userId}</td>
      <td>{order?.userName}</td>
      <td>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to={`/product/${order.productId}`}>
            <div className="product-list-img">
              <img src={order?.mainImage} alt="이미지" />
            </div>
          </Link>
          <div>
            <Link className="LinkTag" to={`/product/${order.productId}`}>
              {order?.name}
            </Link>
          </div>
        </div>
      </td>

      <td>{order?.totalPrice.toLocaleString("ko-KR")} 원</td>

      <td>{order?.createDate}</td>

      <td>{order?.status}</td>

      {/* <td>
        <a
          onClick={deleteProduct}
          className="LinkTag"
          style={{ cursor: "pointer" }}
        >
          삭제
        </a>
        /
        <Link to={`/modify-product/${product.id}`} className="LinkTag">
          수정
        </Link>
      </td> */}
    </tr>
  );
};

export default OrderList;
