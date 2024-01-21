import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import productService from "../../services/product.service";
import QuantityInput from "./QuantityInput";
import Product from "../../components/product/Product";
import Description from "../../components/productDetail/Description";
import Reviews from "../../components/productDetail/Reviews";
import Information from "../../components/productDetail/Information";
// 별점 아이콘 jsx
import Star from "../../components/rate/Star";
import cartService from "../../services/cart.service";
import Cart from "../../model/Cart";
import reviewService from "../../services/review.service";
import Star3 from "../../components/rate/Star3";

const ProductDetails = () => {
  //처음 시작 이미지 번호는 0임 -> product.images[0] = image1 을 의미함
  const [selectedImage, setSelectedImage] = useState("");

  //제품 상세
  const [product, setProduct] = useState([]);

  //제품 수량
  const [quantity, setQuantity] = useState(1); //수량

  //메뉴 선택
  const [selectedMenu, setSelectedMenu] = useState("description");

  const { id } = useParams(); //주소 변수 path Variable
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");

  //평점
  const [rateAvg, setRateAvg] = useState(0);
  const [reviewCnt, setReviewCnt] = useState(0);
  const [reviews, setReviews] = useState([]);

  //메뉴 변경 함수
  const handleChangeMenu = (menu) => {
    setSelectedMenu(menu);
  };

  //제품id가 변경 될 때마다 실행
  useEffect(() => {
    setIsLoading(true);
    //제품 정보 가져오기
    productService
      .getByIdProduct(id)
      .then((response) => {
        const productData = response.data;

        setProduct(productData);

        //기본 이미지 -> 처음 시작 시 제일 크게 나오는 이미지
        setSelectedImage(productData[0].mainImage);
        setIsLoading(false);
      })

      .catch((error) => {
        setError("상품을 불러오는 중 오류가 발생했습니다.");
        setIsLoading(false);
      });
    //제품 리뷰 가져오기
    reviewService.getReviewByProduct(id).then((response) => {
      setReviews(response.data);
      setReviewCnt(response.data.length); //리뷰 총 개수
      let sum = 0;
      for (let i = 0; i < response.data.length; i++) {
        sum += response.data[i].rate;
      }
      setRateAvg(sum / response.data.length); //평균 평점
    });
  }, [id]);

  useEffect(() => {}, [selectedMenu]);

  console.log(reviews);

  //장바구니 추가
  const handleAddCart = async () => {
    if (confirm("장바구니에 추가하시겠습니까?")) {
      try {
        //장바구니 저장
        await cartService.saveCart(new Cart(id, quantity));
        alert("정상적으로 장바구니에 추가되었습니다.");
      } catch (err) {
        alert("장바구니 추가 시 에러 발생");
        console.error(err);
      }
    }
  };

  const listCount = [1, 2, 3, 4];

  return (
    <div className="basic-container ">
      <div className="detailCategory">
        <div className="detailCategory-left">
          <p className="detailCategory-left-text">
            Home{" "}
            <span
              style={{ fontWeight: "bold", margin: "0px 10px", color: "black" }}
            >
              &#62;
            </span>{" "}
            Shop{" "}
            <span
              style={{ fontWeight: "bold", margin: "0px 10px", color: "black" }}
            >
              &#62;
            </span>
          </p>
          <div className="category-divider"></div>
          <p>{product[0]?.name}</p>
        </div>
      </div>
      <div className="detail-page-container">
        <div className="detail-page-container-left">
          <div className="align_center">
            <div className="single_product_thumbnails">
              {/* product 안의 images를 map 반복한다. */}
              {product[0]?.boardImageList &&
                product.map((product, index) => (
                  <img
                    key={index}
                    src={product.boardImageList}
                    alt={product.name}
                    // css 는 selectedImage state가 index일 경우 selected_image 적용한다.
                    className={
                      selectedImage === product.boardImageList
                        ? "selected_image"
                        : ""
                    }
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
            <h1 className="single_product_title">{product[0]?.name}</h1>
            {/* 평점  */}
            <div>
              {Array.from({ length: rateAvg }).map((_, index) => (
                <Star3
                  width={30}
                  height={30}
                  key={index}
                  style={{ margin: "0px 1.5px" }}
                />
              ))}
            </div>
            <div style={{ height: "300px" }}>
              <p className="single_product_description">
                {product[0]?.description}
              </p>
            </div>

            <p className="single_product_price">
              {/* 우리나라 원화와 맞게 toLocaleString으로 변환 */}
              {product[0]?.price.toLocaleString("ko-KR")} 원
            </p>
            <>
              <div
                style={{
                  display: "flex",
                  width: "600px",
                  alignContent: "center",
                }}
              >
                <div className="align_center quantity_input">
                  <QuantityInput
                    quantity={quantity}
                    setQuantity={setQuantity}
                    stock={product[0]?.stock}
                  />
                </div>
                <button onClick={handleAddCart} className="add_cart">
                  Add To Cart
                </button>
              </div>
            </>
          </div>
        </div>
      </div>
      {/* 두 번째 섹션 */}
      <div className="container-list detail-section">
        <div style={{ display: "flex" }}>
          <p
            onClick={() => handleChangeMenu("description")}
            className={
              selectedMenu === "description"
                ? "selected-menu"
                : "detail-page-menu"
            }
          >
            Description
          </p>
          <p
            onClick={() => handleChangeMenu("info")}
            className={
              selectedMenu === "info" ? "selected-menu" : "detail-page-menu"
            }
          >
            Additional Information
          </p>
          <p
            onClick={() => handleChangeMenu("reviews")}
            className={
              selectedMenu === "reviews" ? "selected-menu" : "detail-page-menu"
            }
          >
            Reviews [5]
          </p>
        </div>
        {/* 메뉴 선택에 따라 컴포넌트 변경  */}
        {selectedMenu === "description" ? (
          <Description product={product} />
        ) : (
          ""
        )}
        {selectedMenu === "info" ? <Information product={product} /> : ""}
        {selectedMenu === "reviews" ? (
          <div className="basic-container">
            <div className="review-rate-content">
              <Star width={30} height={30} />
              <p className="review-rate">{rateAvg}</p>
              <p>
                <span style={{ fontWeight: "bold" }}>{reviewCnt}명</span>의
                고객님이 리뷰를 남겨주셨습니다.
              </p>
            </div>
            {reviews && reviews.map((review) => <Reviews review={review} />)}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="divider"></div>

      {/* 세 번째 섹션 */}
      <div className="container-list detail-section">
        <div className="container-list">
          <div className="ListTitle">
            <h2>많이 본 상품들 </h2>
          </div>
          <div className="HomeMainContent3">
            {listCount.map((product, index) => (
              <Product key={index} />
            ))}
          </div>
          <div className="showBtn">
            <Link to="/shop">Show More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
