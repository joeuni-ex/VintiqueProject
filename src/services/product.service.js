import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authFormDataHeader, authHeader } from "./base.service";
import FormData from "form-data";

const API_URL = BASE_API_URL + "/api/product";

const ADD_IMAGE_URL = () => `${BASE_API_URL}/file/upload`;

class ProductService {
  //제품 저장
  saveProduct(product) {
    return axios.post(API_URL, product, { headers: authHeader() }); //인증이 필요하여 헤더에 토큰 들어감
  }

  //이미지 저장
  saveFile = async (formData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const response = await axios.post(ADD_IMAGE_URL(), formData, config);
      const imageUrl = response.data;
      return imageUrl;
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };

  //제품 삭제
  deleteProduct(id) {
    return axios.delete(API_URL + "/" + id, { headers: authHeader() }); //인증이 필요하여 헤더에 토큰 들어감
  }

  //모든 제품 조회
  getAllProducts(page, maxpage) {
    return axios.get(API_URL + "?page=" + page + "&maxpage=" + maxpage); //조회는 인증이 필요없어서 headers 안들어감
  }

  //제품 상세 조회(id)
  getByIdProduct = async (id) => {
    return await axios.get(API_URL + "/" + id, { headers: authHeader() }); //인증 필요
  };
}
//객체로 만들어서 사용(export)
const productService = new ProductService();

export default productService;
