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

  return;

  saveFile = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file, "example.png");

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          // Add any other headers if needed
        },
      };
      console.log(file);
      const response = await axios.post(ADD_IMAGE_URL(), formData, config);

      // Assuming the server returns the image URL
      const imageUrl = response.data;
      return imageUrl;
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };

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
