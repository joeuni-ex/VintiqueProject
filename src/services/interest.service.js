import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authHeader } from "./base.service";

const API_URL = BASE_API_URL + "/api/interest";

class InterestService {
  //관심 제품 저장
  saveInterest(productId) {
    console.log(productId);
    return axios.post(
      API_URL + "/" + productId,
      {},
      {
        headers: authHeader(),
      }
    );
  }

  //유저 별 관심 제품 조회
  getInterestByUserId(page, maxpage) {
    return axios.get(API_URL + "?page=" + page + "&maxpage=" + maxpage, {
      headers: authHeader(),
    });
  }

  //관심 제품 삭제
  deleteInterest(productId) {
    return axios.delete(API_URL + "/" + productId, {
      headers: authHeader(),
    });
  }
}
//객체로 만들어서 사용(export)
const interestService = new InterestService();

export default interestService;
