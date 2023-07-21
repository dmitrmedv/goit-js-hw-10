import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
axios.defaults.headers.common['x-api-key'] =
  'live_lYmOKTQRHsB8sJe9ygzuQe7FXcc2ZvtWiVnNozCi85ub5YUZiLk8YnrbwAneZI04';

export function fetchBreeds() {
  return axios.get('https://api.thecatapi.com/v1/breeds');
}

export function fetchCatByBreed(breedId) {
  return axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
}
