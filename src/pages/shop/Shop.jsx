import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";
import "./Shop.css";
import productService from "../../services/product.service";
import Pagination from "../../components/pagination/Pagination";
import BottomBanner from "../../components/banner/BottomBanner";

const Shop = () => {
  const maxPageSize = 12;

  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    productService.getAllProducts(page, maxPageSize).then((response) => {
      setProductList(response.data.content);
      setPage(response.data.pageable.pageNumber); // 현재 페이지
      setTotalPage(response.data.pageable.pageSize); //총 페이지
      //console.log(response.data);
    });
  }, [page]);

  return (
    <div className="shopContainer">
      <Banner title="Shop" subTitle="Shop" category="전체" />
      <div className="sort">정렬</div>
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
