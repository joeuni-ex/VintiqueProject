import axios from "axios";
import { BASE_API_URL } from "../common/constants";

const BASE_URL = BASE_API_URL + "/api/authentication";

//로그인 서비스
const loginService = (user) => {
  return axios.post(BASE_URL + "/sign-in", user);
};

//가입하기 서비스
const registerService = (user) => {
  return axios.post(BASE_URL + "/sign-up", user);
};

export { loginService, registerService };
