import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelectRef = document.querySelector('.breed-select');
const catInfoRef = document.querySelector('.cat-info');
const loaderRef = document.querySelector('.loader');
const errorRef = document.querySelector('.error');

breedSelectRef.addEventListener('change', selectCat);

loadBreeds();

function selectCat(event) {
  catInfoRef.innerHTML = '';
  fetchCatByBreed(event.target.value)
    .then(({ data }) => {
      errorRef.classList.add('hide');
      loaderRef.classList.toggle('hide');
      let { name, description, temperament } = data[0].breeds[0];
      let { url } = data[0];
      catInfoRef.innerHTML = markupCatCard({
        name,
        description,
        temperament,
        url,
      });
    })
    .catch(error => errorRef.classList.remove('hide'))
    .finally(loaderRef.classList.toggle('hide'));
}

function loadBreeds() {
  loaderRef.classList.add('hide');
  return fetchBreeds()
    .then(({ data }) => {
      breedSelectRef.classList.toggle('hide');
      breedSelectRef.innerHTML = markupOptions(data);
      loaderRef.classList.remove('hide');
    })
    .catch(error => errorRef.classList.remove('hide'));
  // .finally(loaderRef.classList.toggle('hide'));
}

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
