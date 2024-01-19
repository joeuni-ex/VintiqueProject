import React, { useState } from "react";
import { Link } from "react-router-dom";
import orderService from "../../services/order.service";
import "./OrderList.css";

const OrderList = ({ order, onStatusChange, onDetail }) => {
  const [selected, setSelected] = useState(order?.status);

  //주문 상태 변경
  const handleChangeStatus = (e) => {
    setSelected({ status: e.target.value });
  };

  const saveStatus = async () => {
    if (confirm("주문상태를 변경하시겠습니까?")) {
      try {
        await orderService.changeOrderStatus(order.id, selected).then(() => {
          alert("정상적으로 변경되었습니다.");
          onStatusChange(order.id, selected);
        });
      } catch (err) {
        alert("주문 상태 변경 시 오류 발생");
      }
    }
  };
  return (
    <tr>
      <td>{order?.userId}</td>
      <td>{order?.userName}</td>
      <td>
        <div onClick={onDetail} className="orderViewBtn">
          주문상세
        </div>
      </td>
      <td>{order?.totalPrice.toLocaleString("ko-KR")} 원</td>

      <td>{order?.createDate}</td>
      <td>
        <select
          style={{ width: "100%", height: "25px" }}
          onChange={handleChangeStatus}
          defaultValue={selected}
          name="status"
        >
          <option value="주문 완료">주문 완료</option>
          <option value="배송중">배송중</option>
          <option value=" 배송 완료">배송 완료</option>
        </select>
      </td>
      <td onClick={saveStatus} style={{ cursor: "pointer" }}>
        변경
      </td>
    </tr>
  );
};

export default OrderList;
