import { Link } from "react-router-dom";
import "./ProductList.css";
import productService from "../../services/product.service";

const ProductList = ({ product, idx, fetchData }) => {
  //삭제 버튼 클릭 시
  const deleteProduct = async (e) => {
    if (confirm("해당 제품을 삭제하시겠습니까?")) {
      try {
        await productService.deleteProduct(product.id);
        alert("정상적으로 삭제되었습니다.");
        fetchData();
      } catch (err) {
        alert("제품 저장 시 에러 발생");
        console.log(err);
      }
    }
    return;
  };

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

      <td> {product?.price.toLocaleString("ko-KR")} 원</td>

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

export default ProductList;
