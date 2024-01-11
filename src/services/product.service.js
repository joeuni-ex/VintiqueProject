import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authHeader } from "./base.service";

const API_URL = BASE_API_URL + "/api/product";

class ProductService {
  //제품 저장
  saveProduct(product) {
    return axios.post(API_URL, product, { headers: authHeader() }); //인증이 필요하여 헤더에 토큰 들어감
  }
  //제품 삭제
  deleteProduct(product) {
    return axios.delete(API_URL + "/" + product.id, { headers: authHeader() }); //인증이 필요하여 헤더에 토큰 들어감
  }
  //모든 제품 조회
  getAllProducts() {
    return axios.get(API_URL); //조회는 인증이 필요없어서 headers 안들어감
  }
}
//객체로 만들어서 사용(export)
const productService = new ProductService();

export default productService;
