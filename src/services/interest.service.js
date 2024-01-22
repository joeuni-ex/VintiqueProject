import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authHeader } from "./base.service";

const API_URL = BASE_API_URL + "/api/interest";

class InterestService {
  //리뷰 저장
  saveReview(productId) {
    return axios.post(API_URL, review, { headers: authHeader() });
  }

  //유저 별 리뷰 조회
  getReviewByUserId(page, maxpage) {
    return axios.get(API_URL + "?page=" + page + "&maxpage=" + maxpage, {
      headers: authHeader(),
    });
  }

  //리뷰 삭제
  deleteReview(productId) {
    return axios.delete(API_URL + "/" + productId, {
      headers: authHeader(),
    });
  }
}
//객체로 만들어서 사용(export)
const interestService = new InterestService();

export default interestService;
