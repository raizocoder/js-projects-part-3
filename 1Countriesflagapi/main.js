const countryContainer = document.querySelector(".countries-container");
const filterRegion = document.querySelector(".filter-region");
const searchfield = document.querySelector(".search-field");
const drklightbtn = document.querySelector(".drk-light-btn");

let allCountriesdata;

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    allCountriesdata = data;
    renderCountries(data);
    // data.forEach((country) => {
    //   // console.log(country.currencies);
    //   // console.log(country.languages);
    //   // console.log(country.borders);

    //   const countryCard = document.createElement('a');
    //   countryCard.classList.add("country-card")
    //   countryCard.href = `country.html?name=${country.name.common}`;
    //   countryCard.innerHTML = `
    //   <img src="${country.flags.svg}" alt="flag" />
    //   <div class="card-text">
    //     <h3 class="card-title">${country.name.common}</h3>
    //     <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
    //     <p><b>Region: </b>${country.region}</p>
    //     <p><b>Capital: </b>${country.capital}</p>
    //   </div>
    //   `;
    //   countryContainer.append(countryCard);
    // });
  });

filterRegion.addEventListener("change", (e) => {
  // console.log(e.target.value);
  fetch(`https://restcountries.com/v3.1/region/${filterRegion.value}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountries(data);
      // countryContainer.innerHTML = '';
      // console.log(data);
      // data.forEach((country) => {
      //   // console.log(country.currencies);
      //   // console.log(country.languages);
      //   // console.log(country.borders);
      //   const countryCard = document.createElement('a');
      //   countryCard.classList.add("country-card")
      //   countryCard.href = `country.html?name=${country.name.common}`;
      //   countryCard.innerHTML = `
      //   <img src="${country.flags.svg}" alt="flag" />
      //   <div class="card-text">
      //     <h3 class="card-title">${country.name.common}</h3>
      //     <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
      //     <p><b>Region: </b>${country.region}</p>
      //     <p><b>Capital: </b>${country.capital}</p>
      //   </div>
      //   `;
      //   countryContainer.append(countryCard);
      // });
    });
});

function renderCountries(data) {
  countryContainer.innerHTML = "";
  // console.log(data);
  data.forEach((country) => {
    // console.log(country.currencies);
    // console.log(country.languages);
    // console.log(country.borders);
    const countryCard = document.createElement("a");
    countryCard.classList.add("country-card");
    countryCard.href = `country.html?name=${country.name.common}`;
    countryCard.innerHTML = `
      <img src="${country.flags.svg}" alt="flag" />
      <div class="card-text">
        <h3 class="card-title">${country.name.common}</h3>
        <p><b>Population: </b>${country.population.toLocaleString("en-IN")}</p>
        <p><b>Region: </b>${country.region}</p>
        <p><b>Capital: </b>${country.capital}</p>
      </div>
      `;
    countryContainer.append(countryCard);
  });
}
searchfield.addEventListener("input", function (e) {
  const filterCountriesdata = allCountriesdata.filter((country) =>
    country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
  );
  renderCountries(filterCountriesdata);
});
drklightbtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
// const countryCard = document.createElement("a");
// countryCard.classList.add("country-card");
// console.dir(countryCard);
// const cardHTML = `
//  <img src="https://flagcdn.com/as.svg" alt="flag" />
//  <div class="card-text">
//    <h3 class="card-title">ICELAND</h3>
//    <p><b>Population: </b>81,788,900</p>
//    <p><b>Region: </b>Europe</p>
//    <p><b>Capital: </b>Berlin</p>
//  </div>
//  `;
// countryCard.innerHTML = cardHTML;
// countryContainer.append(countryCard);
