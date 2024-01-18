import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authHeader } from "./base.service";

const API_URL = BASE_API_URL + "/api/order";

class OrderService {
  //구매 저장
  saveOrder(orderData) {
    return axios.post(API_URL, orderData, { headers: authHeader() });
  }

  //구매 삭제
  // deleteCart(id) {
  //   return axios.delete(API_URL + "/" + id, { headers: authHeader() });
  // }

  //구매 조회 (고객용)
  getMyOrder(page, maxpage) {
    return axios.get(API_URL + "?page=" + page + "&maxpage=" + maxpage, {
      headers: authHeader(),
    });
  }

  //전체 유저 구매 조회 (관리자용)
  getAllOrder(page, maxpage) {
    return axios.get(API_URL + "/all?page=" + page + "&maxpage=" + maxpage, {
      headers: authHeader(),
    });
  }
}
//객체로 만들어서 사용(export)
const orderService = new OrderService();

export default orderService;
