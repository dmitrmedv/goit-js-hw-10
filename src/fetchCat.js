const { throttle } = require('lodash');

const APY_KEY =
  'live_lYmOKTQRHsB8sJe9ygzuQe7FXcc2ZvtWiVnNozCi85ub5YUZiLk8YnrbwAneZI04';

const BASE_URL =
  'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME';

function fetchCat() {
  return fetch(`BASE_URL`).then(response => response.json());
}

export { fetchCat };
