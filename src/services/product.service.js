import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authFormDataHeader, authHeader } from "./base.service";
import FormData from "form-data";

const API_URL = BASE_API_URL + "/api/product";

const ADD_IMAGE_URL = () => `${BASE_API_URL}/file/upload`;

class ProductService {
  //제품 저장
  saveProduct(product) {
    return axios.post(API_URL, product, { headers: authHeader() });
  }

  //제품 수정
  modifyProduct(product, id) {
    return axios.put(API_URL + "/" + id, product, { headers: authHeader() });
  }

  //제품 삭제
  deleteProduct(id) {
    return axios.delete(API_URL + "/" + id, { headers: authHeader() });
  }

  //모든 제품 조회
  getAllProducts(page, maxpage) {
    return axios.get(API_URL + "?page=" + page + "&maxpage=" + maxpage, {
      headers: authHeader(),
    });
  }

  //모든 제품 조회(가격 높은 순 정렬)
  getAllOrderByPriceDesc(page, maxpage) {
    return axios.get(
      API_URL + "/price-desc" + "?page=" + page + "&maxpage=" + maxpage,
      {
        headers: authHeader(),
      }
    );
  }

  //모든 제품 조회(가격 낮은 순 정렬)
  getAllOrderByPriceAsc(page, maxpage) {
    return axios.get(
      API_URL + "/price-asc" + "?page=" + page + "&maxpage=" + maxpage,
      {
        headers: authHeader(),
      }
    );
  }

  //카테고리별 제품 조회(기본)
  getCategory(category, page, maxpage) {
    return axios.get(
      API_URL +
        "/" +
        category +
        "/default" +
        "?page=" +
        page +
        "&maxpage=" +
        maxpage,
      {
        headers: authHeader(),
      }
    );
  }

  //카테고리별 제품 조회(가격 높은 순 정렬)
  getCategoryOrderByPriceDesc(category, page, maxpage) {
    return axios.get(
      API_URL +
        "/" +
        category +
        "/price-desc" +
        "?page=" +
        page +
        "&maxpage=" +
        maxpage,
      {
        headers: authHeader(),
      }
    );
  }

  //카테고리별 제품 조회(가격 낮은 순 정렬)
  getCategoryOrderByPriceAsc(category, page, maxpage) {
    return axios.get(
      API_URL +
        "/" +
        category +
        "/price-asc" +
        "?page=" +
        page +
        "&maxpage=" +
        maxpage,
      {
        headers: authHeader(),
      }
    );
  }

  //제품 상세 조회(id)
  getByIdProduct = async (id) => {
    return await axios.get(API_URL + "/" + id, { headers: authHeader() });
  };
}
//객체로 만들어서 사용(export)
const productService = new ProductService();

export default productService;
