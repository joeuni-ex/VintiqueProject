import "./ProductList.css";

const ProductList = () => {
  return (
    <tr>
      <td>James</td>
      <td>Matman</td>
      <td>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="product-list-img">
            <img src="" alt="이미지" />
          </div>
          <div> 정말로 예쁜 화분입니다.</div>
        </div>
      </td>
      <td>9000원</td>
      <td>100</td>
      <td>판매중</td>
      <td>삭제/수정</td>
    </tr>
  );
};

export default ProductList;
