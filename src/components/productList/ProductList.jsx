import "./ProductList.css";

const ProductList = ({ product, idx }) => {
  return (
    <tr>
      <td>{idx}</td>
      <td>{product?.category}</td>
      <td>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="product-list-img">
            <img src={product?.mainImage} alt="이미지" />
          </div>
          <div>{product?.name}</div>
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
