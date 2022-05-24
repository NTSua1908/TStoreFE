import axios from "axios";

const AUTH_API_BASE_URL = "http://localhost:8080/api/v1/auth";

class AuthenticationService {
  getToken = () => {
    return localStorage.getItem("USER_KEY");
  };

  userLogin = (authRequest) => {
    return axios.post(AUTH_API_BASE_URL + "/login", authRequest);
  };

  fetchUserData = () => {
    return axios({
      method: "GET",
      url: AUTH_API_BASE_URL + "/userinfo",
      headers: {
        Authorization: "Bearer " + this.getToken(),
      },
    });
  };
}

export default new AuthenticationService();
