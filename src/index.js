import "./css/styles.css";
import Notiflix from "notiflix";
import _ from "lodash";
import fetchCountries from "./fetchCountries";

const DEBOUNCE_DELAY = 300;

const refs = {
  inputRef: document.querySelector("#search-box"),
  countryListRef: document.querySelector(".country-list"),
  countryInfoRef: document.querySelector(".country-info"),
};

refs.inputRef.addEventListener(
  "input",
  _.debounce(searchCountry, DEBOUNCE_DELAY)
);

function searchCountry(e) {
  const country = e.target.value.trim();
  if (country === "") {
    clearMarkup();
    return;
  }

  fetchCountries(country).then(createMarkup);
}

function createMarkup(listOfCountryes) {
  if (listOfCountryes.length >= 2 && listOfCountryes.length <= 10) {
    clearMarkup();
    renderMarkupCountryList(listOfCountryes);
  } else if (listOfCountryes.length <= 1) {
    clearMarkup();
    renderMarkupCountryInfo(listOfCountryes);
  } else if (listOfCountryes.length > 10) {
    clearMarkup();
    Notiflix.Notify.info(
      "Too many matches found. Please enter a more specific name."
    );
  }
}

export const clearMarkup = () => {
  refs.countryInfoRef.innerHTML = "";
  refs.countryListRef.innerHTML = "";
};

function renderMarkupCountryList(listOfCountryes) {
  const markup = listOfCountryes.map(createMarkupCountryList).join("");
  refs.countryListRef.insertAdjacentHTML("beforeend", markup);
}

function renderMarkupCountryInfo(listOfCountryes) {
  const markup = listOfCountryes.map(createMarkupCountryInfo);
  refs.countryInfoRef.insertAdjacentHTML("beforeend", markup);
}

function createMarkupCountryInfo({
  flags,
  name,
  capital,
  population,
  languages,
}) {
  return `<ul>
            <li><img src="${flags.svg}" alt="${
    flags.alt
  } width="30" height="30"> ${name.official}</li>
            <li><span>capital:</span> ${capital}</li>
            <li><span>population:</span> ${population}</li>
            <li><span>languages:</span> ${Object.values(languages).join(
              ", "
            )}</li>
            </ul>`;
}

function createMarkupCountryList({ flags, name }) {
  return `<li><div><img src="${flags.svg}" alt="${flags.alt} width="20" height="20"></div> ${name.official}</li>`;
}
