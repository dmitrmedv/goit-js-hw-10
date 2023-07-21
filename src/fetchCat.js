import axios from 'axios';

// axios.defaults.baseURL = 'https://api.thecatapi.com/v1/images/search';

const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
axios.defaults.headers.common['x-api-key'] =
  'live_lYmOKTQRHsB8sJe9ygzuQe7FXcc2ZvtWiVnNozCi85ub5YUZiLk8YnrbwAneZI04';

// function fetchCat(breed) {
//   return axios
//     .get(`${BASE_URL}?breed_ids=${breed}`)
//     .then(resp => resp.data)
//     .catch(err => console.log(err));
// }

export { fetchCat };
