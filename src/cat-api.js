import axios from 'axios';

export default function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(resp => resp.data);
}
