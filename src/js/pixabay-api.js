import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '24246852-77467cbf1dd5333394cba3aaf';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data.hits;
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      return [];
    });
}
