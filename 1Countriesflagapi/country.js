const countryName = new URLSearchParams(location.search).get("name");
const flagImage = document.querySelector(".country-details img");
const CountriesDetails = document.querySelector(".country-details");
const countryHeading = document.querySelector(".country-content h2");
const capitalName = document.querySelector(".capital");
const populationNo = document.querySelector(".populationNo");
const Region = document.querySelector(".regionn");
const Subregion = document.querySelector(".Subregion");
const Currency = document.querySelector(".Currency");
const Languages = document.querySelector(".Languages");
const topleveldomain = document.querySelector(".topleveldomain");
const borderCountries = document.querySelector(".border-countries");
const ViewMap = document.querySelector(".map");
const NativeName = document.querySelector(".native-name");
const drklightbtn = document.querySelector(".drk-light-btn");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    flagImage.src = country.flags.svg;
    countryHeading.innerText = country.name.common;
    populationNo.innerText = country.population.toLocaleString("en-IN");
    Region.innerText = country.region;
    topleveldomain.innerText = country.tld[0];
    ViewMap.href = `${country.maps.googleMaps}`;

    if (country.name.nativeName) {
      NativeName.innerText = Object.values(country.name.nativeName)[0].common;
    } else {
      NativeName.innerText = country.name.common;
    }

    if (country.subregion) {
      Subregion.innerText = country.subregion;
    }
    if (country.capital) {
      capitalName.innerText = country.capital?.[0];
    }

    if (country.currencies) {
      Currency.innerText = Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(",");
    }
    if (country.languages) {
      Languages.innerText = Object.values(country.languages).map(
        (language) => language
      );
    }
    if (country.borders) {
      country.borders.forEach((border) => {
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([bordercountry]) => {
            // console.log(bordercountry);
            const borderCountryTag = document.createElement("a");
            borderCountryTag.innerText = bordercountry.name.common;
            // console.log(borderCountryTag);
            borderCountryTag.href = `country.html?name=${bordercountry.name.common}`;
            borderCountries.append(borderCountryTag);
          });
      });
    }
  });
drklightbtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

//  export function darkMode(){
//   document.body.classList.toggle('dark');
// }
