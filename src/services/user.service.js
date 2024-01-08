import axios from "axios";
import { BASE_API_URL } from "../common/constants";

const API_URL = BASE_API_URL + "/api/user";

class UserService {
  //유저네임 중복 검색
  checkUser(username) {
    return axios.get(API_URL + "/checkuser", { params: { username } });
  }
}

const userService = new UserService();

export default userService;
