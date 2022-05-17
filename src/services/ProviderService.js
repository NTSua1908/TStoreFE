import axios from "axios";

const PROVIDER_API_BASE_URL = "http://localhost:8080/api/v1/provider";

class ProviderService {
  getProviders() {
    return axios.get(PROVIDER_API_BASE_URL);
  }

  createProvider(Provider) {
    return axios.post(PROVIDER_API_BASE_URL, Provider);
  }

  getProviderById(ProviderId) {
    return axios.get(PROVIDER_API_BASE_URL + "/" + ProviderId);
  }

  updateProvider(Provider, ProviderId) {
    return axios.put(PROVIDER_API_BASE_URL + "/" + ProviderId, Provider);
  }

  deleteProvider(ProviderId) {
    return axios.delete(PROVIDER_API_BASE_URL + "/" + ProviderId);
  }
}

export default new ProviderService();
