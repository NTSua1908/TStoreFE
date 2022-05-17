import axios from "axios";

const GAME_TYPE_API_BASE_URL = "http://localhost:8080/api/v1/gametype";

class GameTypeService {
  getGameTypes() {
    return axios.get(GAME_TYPE_API_BASE_URL);
  }

  createGameType(GameType) {
    return axios.post(GAME_TYPE_API_BASE_URL, GameType);
  }

  getGameTypeById(GameTypeId) {
    return axios.get(GAME_TYPE_API_BASE_URL + "/" + GameTypeId);
  }

  updateGameType(GameType, GameTypeId) {
    return axios.put(GAME_TYPE_API_BASE_URL + "/" + GameTypeId, GameType);
  }

  deleteGameType(GameTypeId) {
    return axios.delete(GAME_TYPE_API_BASE_URL + "/" + GameTypeId);
  }
}

export default new GameTypeService();
