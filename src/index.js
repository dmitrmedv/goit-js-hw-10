import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelectRef = document.querySelector('.breed-select');
const catInfoRef = document.querySelector('.cat-info');
const loaderRef = document.querySelector('.loader');
const errorRef = document.querySelector('.error');

loaderRef.style.display = 'none';
errorRef.style.display = 'none';

breedSelectRef.addEventListener('change', selectCat);

function selectCat(event) {
  catInfoRef.innerHTML = '';
  loaderRef.style.display = 'block';
  // setTimeout(() => {
  fetchCatByBreed(event.target.value)
    .then(({ data }) => {
      let { name, description, temperament } = data[0].breeds[0];
      let { url } = data[0];
      catInfoRef.innerHTML = markupCatCard({
        name,
        description,
        temperament,
        url,
      });
    })
    .catch(error => (errorRef.style.display = 'block'))
    .finally((loaderRef.style.display = 'none'));
  // }, 3000);
}

fetchBreeds()
  .then(({ data }) => {
    breedSelectRef.innerHTML = markupOptions(data);
  })
  .catch(error => console.log(error));

function markupOptions(data) {
  return data
    .map(({ id, name }) => `<option value=${id}>${name}</option>`)
    .join('');
}

function markupCatCard({ name, description, temperament, url }) {
  return `
    <img src=${url} alt="${name}"/>
    <div class ='infobox'>
    <h2>${name}</h2>
    <p>${description}</p>
    <p><span>Temperament:</span> ${temperament}</p>`;
}
