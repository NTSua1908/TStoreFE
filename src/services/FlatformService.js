import axios from "axios";

const GAME_API_BASE_URL = "http://localhost:8080/api/v1/flatform";

class FlatformService {
  getFlatforms() {
    return axios.get(GAME_API_BASE_URL);
  }

  createFlatform(Flatform) {
    return axios.post(GAME_API_BASE_URL, Flatform);
  }

  getFlatformById(FlatformId) {
    return axios.get(GAME_API_BASE_URL + "/" + FlatformId);
  }

  updateFlatform(Flatform, FlatformId) {
    return axios.put(GAME_API_BASE_URL + "/" + FlatformId, Flatform);
  }

  deleteFlatform(FlatformId) {
    return axios.delete(GAME_API_BASE_URL + "/" + FlatformId);
  }
}

export default new FlatformService();
