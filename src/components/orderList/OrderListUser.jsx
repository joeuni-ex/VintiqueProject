import React from "react";

const OrderListUser = ({ order, onDetail, idx }) => {
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>
        <div onClick={onDetail} className="orderViewBtn">
          주문상세
        </div>
      </td>
      <td>{order?.totalPrice.toLocaleString("ko-KR")} 원</td>

      <td>{order?.createDate}</td>
      <td>{order?.status}</td>
      <td style={{ cursor: "pointer" }}>배송조회</td>
    </tr>
  );
};

export default OrderListUser;
