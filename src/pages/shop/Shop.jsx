import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";
import "./Shop.css";
import productService from "../../services/product.service";

const Shop = () => {
  const listCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    productService.getAllProducts(page).then((response) => {
      setProductList(response.data.content);
      setPage(response.data.pageable.pageNumber); // 현재 페이지
      setTotalPage(response.data.pageable.pageSize); //총 페이지
      //console.log(response.data);
    });
  }, [page]);

  console.log(productList);

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
    </div>
  );
};

export default Shop;
