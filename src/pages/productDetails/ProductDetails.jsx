import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import productService from "../../services/product.service";
import ResponseProduct from "../../model/ResponseProduct";

const ProductDetails = () => {
  //처음 시작 이미지 번호는 0임 -> product.images[0] = image1 을 의미함
  const [selectedImage, setSelectedImage] = useState("");

  //제품 상세
  const [product, setProduct] = useState([]);

  const { id } = useParams(); //주소 변수 path Variable
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");

  // name,
  //   description,
  //   category,
  //   price,
  //   stock,
  //   mainImage,
  //   boardImageList,
  //   id,
  //   favoriteCount,
  //   reviewCount,
  //   createTime;

  useEffect(() => {
    setIsLoading(true);
    productService
      .getByIdProduct(id)
      .then((response) => {
        const productData = response.data;

        setProduct(productData);

        //기본 이미지 -> 처음 시작 시 제일 크게 나오는 이미지
        setSelectedImage(productData[0].mainImage); // Set default selected image
        setIsLoading(false);
      })
      .catch((error) => {
        setError("상품을 불러오는 중 오류가 발생했습니다.");
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className="basic-container ">
      <div className="sort">정렬</div>
      {isLoading && <em>로딩중...</em>}
      <div className="detail-page-container">
        <div className="detail-page-container-left">
          <div className="align_center">
            <div className="single_product_thumbnails">
              {/* product 안의 images를 map 반복한다. */}
              {product[0].boardImageList &&
                product.map((product, index) => (
                  <img
                    key={index}
                    src={product.boardImageList}
                    alt={product.name}
                    // css 는 selectedImage state가 index일 경우 selected_image 적용한다.
                    className={selectedImage === index ? "selected_image" : ""}
                    // 클릭하면 index로 스테이트 저장
                    onClick={() => setSelectedImage(product.boardImageList)}
                  />
                ))}
            </div>

            <img
              // 이미지는 선택된 index의 이미지로 출력한다.
              src={selectedImage}
              alt={product.name}
              className="single_product_display"
            />
          </div>
        </div>
        <div className="detail-page-container-right">
          {/* 상품 디테일 */}
          <div className="single_product_details">
            <h1 className="single_product_title">{product.name}</h1>
            <p className="single_product_description">{product.description}</p>
            <p className="single_product_price">
              {/* 우리나라 원화와 맞게 toLocaleString으로 변환 */}
              {/* {product.price.toLocaleString("ko-KR")} 원 */}
            </p>
            {/* {user && ( */}
            <>
              <h2 className="quantity_title">구매개수:</h2>
              <div className="align_center quantity_input">
                {/* <QuantityInput
                    // quantity={quantity}
                    setQuantity={setQuantity}
                    stock={product.stock}
                  /> */}
              </div>

              <button
                // onClick={() => addToCart(product, quantity)}
                className="search_button add_cart"
              >
                장바구니 추가
              </button>
            </>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
