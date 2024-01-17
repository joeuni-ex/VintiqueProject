import React from "react";
import { Link } from "react-router-dom";

const OrderList = () => {
  return (
    <tr>
      <td>{idx}</td>
      <td>{product?.category}</td>
      <td>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to={`/product/${product.id}`}>
            <div className="product-list-img">
              <img src={product?.mainImage} alt="이미지" />
            </div>
          </Link>
          <div>
            <Link className="LinkTag" to={`/product/${product.id}`}>
              {product?.name}
            </Link>
          </div>
        </div>
      </td>

      <td>{product?.price}원</td>

      <td>{product?.stock}</td>
      {product?.stock === 0 ? (
        <td style={{ color: "red" }}>매진</td>
      ) : (
        <td>판매중</td>
      )}

      <td>
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
      </td>
    </tr>
  );
};

export default OrderList;
