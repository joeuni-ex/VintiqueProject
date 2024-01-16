import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authFormDataHeader, authHeader } from "./base.service";
import FormData from "form-data";

const API_URL = BASE_API_URL + "/api/carts";

class CartService {
  //장바구니 저장
  saveCart(item) {
    return axios.post(API_URL, item, { headers: authHeader() }); //인증이 필요하여 헤더에 토큰 들어감
  }

  // //장바구니 삭제
  // deleteProduct(id) {
  //   return axios.delete(API_URL + "/" + id, { headers: authHeader() }); //인증이 필요하여 헤더에 토큰 들어감
  // }

  // //장바구니 제품 조회
  // getAllProducts(page, maxpage) {
  //   return axios.get(API_URL + "?page=" + page + "&maxpage=" + maxpage); //조회는 인증이 필요없어서 headers 안들어감
  // }

  // //장바구니 상세 조회(id)
  // getByIdProduct = async (id) => {
  //   return await axios.get(API_URL + "/" + id, { headers: authHeader() }); //인증 필요
  // };
}
//객체로 만들어서 사용(export)
const cartService = new CartService();

export default cartService;
