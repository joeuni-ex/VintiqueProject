import "./Home.css";
import mainImg from "../../assets/main.jpg";

import Product from "../../components/product/Product";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
  const listCount = [1, 2, 3, 4, 5, 6, 7, 8];

  console.log(images);
  return (
    <main>
      {/* 메인1 */}
      <div className="container">
        <div className="HomeMainImg">
          <img src={mainImg} alt="mainImg" />
        </div>
        <div className="HomeMainContent">
          <p>New Arrival</p>
          <span>Discover Our New Collection</span>
          <p>
            우리 제품은 더 많은 편안함과 세련미를 제공합니다. <br />
            다양한 컬렉션으로 여러분의 공간을 개성 있게 꾸며보세요
          </p>
          <div className="buyBtn">
            <p>BUY Now</p>
          </div>
        </div>
      </div>
      {/* 메인2 */}
      <div className="container-list">
        <div className="ListTitle">
          <h2>제품 둘러보기</h2>
          <br />
          <p>
            각 공간마다 편안한 분위기를 연출하는 인테리어 소품을 만나보세요.
          </p>
        </div>
        <div className="HomeMainContent2">
          <div className="MainList">
            <img src={mainImg} alt="" />
            <p>Dining</p>
          </div>
          <div className="MainList">
            <img src={mainImg} alt="" />
            <p>Living</p>
          </div>
          <div className="MainList">
            <img src={mainImg} alt="" />
            <p>Bedroom</p>
          </div>
        </div>
      </div>
      {/* 메인3 */}
      <div className="container-list">
        <div className="ListTitle">
          <h2>판매중인 제품들</h2>
        </div>
        <div className="HomeMainContent3">
          {listCount.map((product, index) => (
            <Product key={index} />
          ))}
        </div>
        <div className="showBtn">
          <p>Show More</p>
        </div>
      </div>
      {/* 메인4 */}
      <div className="gallery">
        <div className="ListTitle">
          <p>여러분의 가구 배치를 공유하세요!</p>
          <h1>#Furniture</h1>
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
