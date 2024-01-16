import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authHeader } from "./base.service";

const API_URL = BASE_API_URL + "/api/carts";

class CartService {
  //장바구니 저장
  saveCart(item) {
    return axios.post(API_URL, item, { headers: authHeader() });
  }

  //장바구니 삭제
  deleteCart(id) {
    return axios.delete(API_URL + "/" + id, { headers: authHeader() });
  }

  //장바구니 제품 조회
  getAllCart() {
    return axios.get(API_URL, { headers: authHeader() });
  }
}
//객체로 만들어서 사용(export)
const cartService = new CartService();

export default cartService;
