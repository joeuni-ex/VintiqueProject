import React from "react";
import { Link } from "react-router-dom";

const OrderList = ({ order }) => {
  return (
    <tr>
      <td>{order?.userId}</td>
      <td>{order?.userName}</td>
      <td>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <Link className="LinkTag" to={`/product/${order?.productId}`}>
              {order?.name}
            </Link>
          </div>
        </div>
      </td>

      <td>{order?.totalPrice.toLocaleString("ko-KR")} 원</td>

      <td>{order?.createDate}</td>

      <td>{order?.status}</td>

      <td>
        <a className="LinkTag" style={{ cursor: "pointer" }}>
          삭제
        </a>
        /
      </td>
    </tr>
  );
};

export default OrderList;
