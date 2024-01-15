import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";
import "./Shop.css";
import productService from "../../services/product.service";
import Pagination from "../../components/pagination/Pagination";
import BottomBanner from "../../components/banner/BottomBanner";

const Shop = () => {
  const [maxPageSize, setMaxPageSize] = useState(12); //한 페이지에 최대 출력할 제품 개수
  const [page, setPage] = useState(0); // 현재 페이지
  const [totalPage, setTotalPage] = useState(0); //총 페이지
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    productService.getAllProducts(page, maxPageSize).then((response) => {
      setProductList(response.data.content);
      setPage(response.data.pageable.pageNumber); // 현재 페이지
      setTotalPage(response.data.pageable.pageSize); //총 페이지
      //console.log(response.data);
    });
  }, [page, maxPageSize]);

  const handleChangeMaxShow = (e) => {
    setMaxPageSize(e.target.value);
  };

  return (
    <div className="shopContainer">
      <Banner title="Shop" subTitle="Shop" category="전체" />
      <div className="shop-option-container">
        <div
          style={{
            width: "1200px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="shop-option-left">
            <div>▶Dining</div>
            <div>▶Living</div>
            <div>▶Bedroom</div>
          </div>
          <div className="shop-option-rigth">
            <div>
              Show
              <input
                onChange={handleChangeMaxShow}
                type="text"
                className="shop-option-rigth-show"
                placeholder={maxPageSize}
              />
            </div>
            <div style={{ marginLeft: "30px" }}>
              Short by
              <select name="" id="" className="shop-option-rigth-sort">
                <option value="1">Default</option>
                <option value="2">가격낮은순</option>
                <option value="3">가격높은순</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="container-list">
        <div className="HomeMainContent3">
          {productList.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
      <BottomBanner />
    </div>
  );
};

export default Shop;
