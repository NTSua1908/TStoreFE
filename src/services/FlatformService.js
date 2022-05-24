import axios from "axios";
import AuthenticationService from "./AuthenticationService";

const FLATFORM_API_BASE_URL = "http://localhost:8080/api/v1/admin/flatform";

class FlatformService {
  getFlatforms() {
    return axios({
      method: "GET",
      url: FLATFORM_API_BASE_URL,
      headers: {
        Authorization: "Bearer " + AuthenticationService.getToken(),
      },
    });
  }

  createFlatform(Flatform) {
    return axios.post(FLATFORM_API_BASE_URL, Flatform);
  }

  getFlatformById(FlatformId) {
    return axios.get(FLATFORM_API_BASE_URL + "/" + FlatformId);
  }

  updateFlatform(Flatform, FlatformId) {
    return axios.put(FLATFORM_API_BASE_URL + "/" + FlatformId, Flatform);
  }

  deleteFlatform(FlatformId) {
    return axios.delete(FLATFORM_API_BASE_URL + "/" + FlatformId);
  }
}

export default new FlatformService();
