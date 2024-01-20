import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authHeader } from "./base.service";

const API_URL = BASE_API_URL + "/api/review";

class ReviewService {
  //구매 저장
  saveReview(review) {
    return axios.post(API_URL, review, { headers: authHeader() });
  }

  //제품 별 구매 조회
  getReviewByProduct(productId) {
    return axios.get(API_URL + "/" + productId, {
      headers: authHeader(),
    });
  }

  //유저 별 상세 조회
  getReviewByUserId() {
    return axios.get(API_URL, { headers: authHeader() });
  }

  //리뷰 삭제
  deleteReview(reviewId) {
    return axios.delete(API_URL + "/" + reviewId, {
      headers: authHeader(),
    });
  }
}
//객체로 만들어서 사용(export)
const reviewService = new ReviewService();

export default reviewService;
