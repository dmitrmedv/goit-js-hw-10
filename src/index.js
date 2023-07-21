import { fetchCat } from './fetchCat';
import fetchBreeds from './cat-api';

const breedSelectRef = document.querySelector('.breed-select');

fetchBreeds().then(renderOptions(markup));

function markup(data) {
  return data
    .map(({ id, name }) => {
      return `<option value=${id}>${name}</option>`;
    })
    .join('');
}

function renderOptions(el) {
  breedSelectRef.insertAdjacentElement('beforebegin', el);
}
