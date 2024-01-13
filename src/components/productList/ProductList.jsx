import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductList = ({ product, idx }) => {
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
      <td>판매중</td>
      <td>삭제/수정</td>
    </tr>
  );
};

export default ProductList;
