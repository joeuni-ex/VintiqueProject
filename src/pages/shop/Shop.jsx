import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";
import "./Shop.css";
import productService from "../../services/product.service";
import Pagination from "../../components/pagination/Pagination";
import BottomBanner from "../../components/banner/BottomBanner";
import Spinner from "../../components/loading/Spinner";

const Shop = () => {
  const [maxPageSize, setMaxPageSize] = useState(12); //한 페이지에 최대 출력할 제품 개수
  const [page, setPage] = useState(0); // 현재 페이지
  const [totalPage, setTotalPage] = useState(0); //총 페이지
  const [productList, setProductList] = useState([]); // 제품 데이터
  const [category, setCategory] = useState("all"); // 카테고리 변경
  const [orderBy, setOrderBy] = useState("1"); // 가격 높은 순, 낮은 순 정렬
  const [isLoading, setIsLoading] = useState(false); // 로딩 중

  //최초 시작 시 전체 제품 가져오는 함수
  const fetchData = async () => {
    productService.getAllProducts(page, maxPageSize).then((response) => {
      setProductList(response.data.content);
      setPage(response.data.pageable.pageNumber); // 현재 페이지
      setTotalPage(response.data.pageable.pageSize); //총 페이지
      setIsLoading(false);
    });
  };

  //최초 시작 시 전체 제품 가져오기
  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [page, maxPageSize]);

  //한 페이지 최대 출력 개수 옵션 변경
  const handleChangeMaxShow = (e) => {
    setMaxPageSize(e.target.value);
  };

  //카테고리 변경 시 실행
  const handleChangeCategory = (category) => {
    setCategory(category);
  };

  //카테고리 변경 시 실행
  useEffect(() => {
    setIsLoading(true);
    productService.getCategory(category, page, maxPageSize).then((response) => {
      setProductList(response.data.content);
      setPage(response.data.pageable.pageNumber); // 현재 페이지
      setTotalPage(response.data.pageable.pageSize); //총 페이지
      setIsLoading(false);
    });
    if (category == "all") {
      productService.getAllProducts(page, maxPageSize).then((response) => {
        setProductList(response.data.content);
        setPage(response.data.pageable.pageNumber); // 현재 페이지
        setTotalPage(response.data.pageable.pageSize); //총 페이지
        setIsLoading(false);
      });
    }
  }, [category]);

  //정렬 및 관심 제품 추가,삭제 시 실행되는 함수
  const orderByFetch = async () => {
    try {
      if (orderBy === "1" && category === "all") {
        //정렬 default And catetory 전체
        await productService
          .getAllProducts(page, maxPageSize)
          .then((response) => {
            setProductList(response.data.content);
            setPage(response.data.pageable.pageNumber); // 현재 페이지
            setTotalPage(response.data.pageable.pageSize); //총 페이지
            setIsLoading(false);
          });
      }

      if (orderBy === "2" && category === "all") {
        await productService
          .getAllOrderByPriceAsc(page, maxPageSize)
          .then((response) => {
            setProductList(response.data.content);
            setPage(response.data.pageable.pageNumber); // 현재 페이지
            setTotalPage(response.data.pageable.pageSize); //총 페이지
            setIsLoading(false);
          });
      }

      if (orderBy === "3" && category === "all") {
        await productService
          .getAllOrderByPriceDesc(page, maxPageSize)
          .then((response) => {
            setProductList(response.data.content);
            setPage(response.data.pageable.pageNumber); // 현재 페이지
            setTotalPage(response.data.pageable.pageSize); //총 페이지
            setIsLoading(false);
          });
      }

      if (orderBy === "1" && category !== "all") {
        await productService
          .getCategory(category, page, maxPageSize)
          .then((response) => {
            setProductList(response.data.content);
            setPage(response.data.pageable.pageNumber); // 현재 페이지
            setTotalPage(response.data.pageable.pageSize); //총 페이지
            setIsLoading(false);
          });
      }

      if (orderBy === "2" && category !== "all") {
        await productService
          .getCategoryOrderByPriceAsc(category, page, maxPageSize)
          .then((response) => {
            setProductList(response.data.content);
            setPage(response.data.pageable.pageNumber); // 현재 페이지
            setTotalPage(response.data.pageable.pageSize); //총 페이지
            setIsLoading(false);
          });
      }
      if (orderBy === "3" && category !== "all") {
        await productService
          .getCategoryOrderByPriceDesc(category, page, maxPageSize)
          .then((response) => {
            setProductList(response.data.content);
            setPage(response.data.pageable.pageNumber); // 현재 페이지
            setTotalPage(response.data.pageable.pageSize); //총 페이지
            setIsLoading(false);
          });
      }
    } catch (err) {
      console.log;
    }
  };

  //정렬
  useEffect(() => {
    setIsLoading(true);
    orderByFetch();
  }, [orderBy, page, maxPageSize]);

  //정렬 변경 시 실행
  const handleChangeOrderBy = (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <div className="shopContainer">
      <Banner title="Shop" subTitle="Shop" category={category} />
      <div className="shop-option-container">
        <div
          style={{
            width: "1200px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="shop-option-left">
            <div
              onClick={() => handleChangeCategory("all")}
              className={
                category && category === "all"
                  ? "shop-option-left-cateogry-selected"
                  : "shop-option-left-cateogry"
              }
            >
              {category && category === "all" ? "▶" : ""} All
            </div>
            <div
              onClick={() => handleChangeCategory("dining")}
              className={
                category && category === "dining"
                  ? "shop-option-left-cateogry-selected"
                  : "shop-option-left-cateogry"
              }
            >
              {category && category === "Dining" ? "▶" : ""} Dining
            </div>
            <div
              onClick={() => handleChangeCategory("living")}
              className="shop-option-left-cateogry"
            >
              {category && category === "living" ? "▶" : ""} Living
            </div>
            <div
              onClick={() => handleChangeCategory("bedroom")}
              className="shop-option-left-cateogry"
            >
              {category && category === "bedroom" ? "▶" : ""} Bedroom
            </div>
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
              <select
                onChange={handleChangeOrderBy}
                name="order"
                className="shop-option-rigth-sort"
              >
                <option value="1">Default</option>
                <option value="2">가격낮은순</option>
                <option value="3">가격높은순</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="container-list">
        <div className="home-main-content3">
          {isLoading ? (
            <Spinner />
          ) : (
            productList.map((product, index) => (
              <Product key={index} product={product} fetchData={orderByFetch} />
            ))
          )}
        </div>
      </div>
      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
      <BottomBanner />
    </div>
  );
};

export default Shop;
