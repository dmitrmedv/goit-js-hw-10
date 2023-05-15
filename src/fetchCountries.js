import Notiflix from "notiflix";
import { clearMarkup } from "./index";

export default function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  ).then((response) => {
    if (!response.ok) {
      clearMarkup();
      Notiflix.Notify.failure("Oops, there is no country with that name");
    }
    return response.json();
  });
}
