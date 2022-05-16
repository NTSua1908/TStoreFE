import axios from "axios";

const IMAGE_API_BASE_URL = "http://localhost:8080/api/v1/image";

class ImageService {
  getImages() {
    return axios.get(IMAGE_API_BASE_URL);
  }

  createImage(Image) {
    return axios.post(IMAGE_API_BASE_URL, Image);
  }

  getImageById(ImageId) {
    return axios.get(IMAGE_API_BASE_URL + "/" + ImageId);
  }

  updateImage(Image, ImageId) {
    return axios.put(IMAGE_API_BASE_URL + "/" + ImageId, Image);
  }

  deleteImage(ImageId) {
    return axios.delete(IMAGE_API_BASE_URL + "/" + ImageId);
  }
}

export default new ImageService();
