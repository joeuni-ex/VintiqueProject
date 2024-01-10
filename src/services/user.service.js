import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authHeader } from "./base.service";

const API_URL = BASE_API_URL + "/api/user";

class UserService {
  //유저네임 중복 검색
  checkUser(username) {
    return axios.get(API_URL + "/checkuser", { params: { username } });
  }

  //유저 권한 변경
  changeRole(role) {
    return axios.put(
      API_URL + "/change/" + role,
      {},
      { headers: authHeader() }
    );
  }
}

const userService = new UserService();

export default userService;
