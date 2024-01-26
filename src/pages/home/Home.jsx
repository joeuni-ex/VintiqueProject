import "./Home.css";
import mainImg from "../../assets/main2.jpg";
import dining from "../../assets/main-dining.jpg";
import bed from "../../assets/main-bedroom.jpg";
import living from "../../assets/main-livingroom.jpg";

import Product from "../../components/product/Product";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import productService from "../../services/product.service";

const Home = () => {
  const [maxPageSize, setMaxPageSize] = useState(8); //한 페이지에 최대 출력할 제품 개수
  const [page, setPage] = useState(0); // 현재 페이지
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  const fetchData = async () => {
    //모든 제품
    await productService.getAllProducts(page, maxPageSize).then((response) => {
      setProductList(response.data.content);
      setPage(response.data.pageable.pageNumber); // 현재 페이지
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
    //이미지 갤러리 import
    const importImages = async () => {
      const importedImages = [];
      for (let i = 1; i <= 10; i++) {
        try {
          const image = await import(`../../assets/${i}.jpg`);
          importedImages.push(image.default);
        } catch (error) {
          console.error("Error importing image:", error);
        }
      }

      setImages(importedImages);
      setIsLoading(false);
    };

    importImages();
  }, []);

  return (
    <main>
      {/* 메인1 */}
      <div className="container">
        <div className="home-main-img">
          <img src={mainImg} alt="mainImg" />
        </div>
        <div className="home-main-content">
          <p>New Arrival</p>
          <span>Discover Our New Collection</span>
          <p>
            더 많은 편안함과 세련미를 제공합니다. <br />
            다양한 컬렉션으로 공간을 개성 있게 꾸며보세요.
          </p>
          <Link
            to={`/product/1`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <div className="buyBtn">
              <p>자세히 보기</p>
            </div>
          </Link>
        </div>
      </div>
      {/* 메인2 */}
      <div className="container-list">
        <div className="list-title">
          <h2>제품 둘러보기</h2>
          <br />
          <p>
            각 공간마다 편안한 분위기를 연출하는 인테리어 소품을 만나보세요.
          </p>
        </div>
        <div className="home-main-content2">
          <div className="main-list">
            <div className="main-list-img">
              <img src={dining} alt="" />
            </div>
            <p>Dining</p>
          </div>
          <div className="main-list">
            <div className="main-list-img">
              <img src={bed} alt="" />
            </div>
            <p>Living</p>
          </div>
          <div className="main-list">
            <div className="main-list-img">
              <img src={living} alt="" />
            </div>
            <p>Bedroom</p>
          </div>
        </div>
      </div>
      {/* 메인3 */}
      <div className="container-list">
        <div className="list-title">
          <h2>판매중인 제품들</h2>
          <br />
          <p>요즘 가장 핫한 상품</p>
        </div>
        <div className="home-main-content3">
          {isLoading && <p>로딩중</p>}
          {productList.map((product, index) => (
            <Product key={index} product={product} fetchData={fetchData} />
          ))}
        </div>
        <div className="showBtn">
          <Link to="/shop">Show More</Link>
        </div>
      </div>
      {/* 메인4 */}
      <div className="gallery">
        <div className="list-title">
          <h1>#Furniture</h1>
          <p>여러분의 가구 배치를 공유하세요!</p>
          {isLoading && <p>로딩중</p>}
        </div>
        <ul className="images">
          {images.map((img, index) => (
            <li className="img" key={index}>
              <img src={img} alt={`img-${index}`} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
