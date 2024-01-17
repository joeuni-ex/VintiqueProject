import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authHeader } from "./base.service";

const API_URL = BASE_API_URL + "/api/purchase";

class PurchaseService {
  //구매 저장
  saveCart(item) {
    return axios.post(API_URL, item, { headers: authHeader() });
  }

  //구매 삭제
  // deleteCart(id) {
  //   return axios.delete(API_URL + "/" + id, { headers: authHeader() });
  // }

  //구매 조회 (고객용)
  getMyPurchase(page, maxpage) {
    return axios.get(API_URL, "?page=" + page + "&maxpage=" + maxpage, {
      headers: authHeader(),
    });
  }

  //전체 유저 구매 조회 (관리자용)
  getAllPurchase(page, maxpage) {
    return axios.get(API_URL + "/all?page=" + page + "&maxpage=" + maxpage, {
      headers: authHeader(),
    });
  }
}
//객체로 만들어서 사용(export)
const purchaseService = new PurchaseService();

export default purchaseService;
