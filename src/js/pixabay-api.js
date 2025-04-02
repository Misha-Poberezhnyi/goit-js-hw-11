import axios from "axios";

const API_KEY = "49635382-66eda9712402d4470ed35045b";
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    })
    .then(response => {
      return response.data.hits;
    })
    .catch(error => {
      console.error("Error fetching images:", error);
      return [];
    });
}
