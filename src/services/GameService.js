import axios from "axios";

const GAME_API_BASE_URL = "http://localhost:8080/api/v1/game";

class GameService {
  getGames() {
    return axios.get(GAME_API_BASE_URL);
  }

  createGame(Game) {
    return axios.post(GAME_API_BASE_URL, Game);
  }

  getGameById(GameId) {
    return axios.get(GAME_API_BASE_URL + "/" + GameId);
  }

  updateGame(Game, GameId) {
    return axios.put(GAME_API_BASE_URL + "/" + GameId, Game);
  }

  deleteGame(GameId) {
    return axios.delete(GAME_API_BASE_URL + "/" + GameId);
  }
}

export default new GameService();
