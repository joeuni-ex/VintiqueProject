import React from "react";

const OrderListUser = ({ onDetail }) => {
  return (
    <tr>
      <td>1</td>
      <td>ㅇ</td>
      <td>
        <div onClick={onDetail} className="orderViewBtn">
          주문상세
        </div>
      </td>
      <td>5000 원</td>

      <td>2022</td>
      <td></td>
      <td style={{ cursor: "pointer" }}>리뷰작성</td>
    </tr>
  );
};

export default OrderListUser;
