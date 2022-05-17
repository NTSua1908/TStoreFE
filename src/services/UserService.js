import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/user";

class UserService {
  getUsers() {
    return axios.get(USER_API_BASE_URL);
  }

  createUser(User) {
    return axios.post(USER_API_BASE_URL, User);
  }

  getUserById(UserId) {
    return axios.get(USER_API_BASE_URL + "/" + UserId);
  }

  updateUser(User, UserId) {
    return axios.put(USER_API_BASE_URL + "/" + UserId, User);
  }

  deleteUser(UserId) {
    return axios.delete(USER_API_BASE_URL + "/" + UserId);
  }
}

export default new UserService();
