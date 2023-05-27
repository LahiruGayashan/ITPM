import axios from "axios";
import requestConfigJason from "./configJason";

const BASE_URL = "http://localhost:8080";

class AdminAPI {
  // Login
  static login(credentials) {
    return axios.post(
      `${BASE_URL}/api/admin/login`,
      credentials,
      requestConfigJason
    );
  }

  // Signup
  static signup(values) {
    return axios.post(
      `${BASE_URL}/api/admin/signup`,
      values,
      requestConfigJason
    );
  }
}

export default AdminAPI;
