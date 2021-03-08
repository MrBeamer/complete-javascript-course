'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// function getCountryData(country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         data.population / 1000000
//       ).toFixed(2)} million people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//     </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// }

// getCountryData('spain');
// getCountryData('italy');

///////////////////////////////////////

function renderCountry(data, className = '') {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(2)} million people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
}

function renderError(message) {
  countriesContainer.insertAdjacentText('beforeend', message);
}

// function getCountryAndNeighbour(country) {
//   // AJAX call country
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //render country
//     renderCountry(data);

//     // get neighbbour country 2
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     // AJAX call 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// }
// getCountryAndNeighbour('usa');

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

// function getCountryData(country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found! (${response.message})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders;
//       if (!neighbour) return;

//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Neighbour not found! (${response.message})`);

//       return response.json();
//     })
//     .then(data2 => renderCountry(data2, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// }

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// function getJson(url, errMsg = 'Something went wrong') {
//   return fetch(`url`).then(response => {
//     if (!response.ok) throw new Error(`${errMsg} (${response.status})`);

//     return response.json();
//   });
// }

// function getCountryData(country) {
//   getJson(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     `Country not found!)`
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders;
//       if (!neighbour) throw new Error('');

//       return getJson(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         `Neighbour not found!`
//       );
//     })
//     .then(data2 => renderCountry(data2, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// }

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// function getJson(url, errMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errMsg} (${response.status})`);

//     return response.json();
//   });
// }

// getCountryData('australia');

// CODING CHALLENGE 1

function whereAmI(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok)
        throw new Error(
          `Caution 💥, you are reloading the webpage to fast! (Error: ${response.status})`
        );
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}.`);
      let country = data.country;

      getCountryData(country);
    })
    .catch(err => console.error(`${err}`));
}

// whereAmI(52.508, 13.381);
whereAmI(51.5, 0.1167);
// whereAmI(-33.933, 18.474);
// whereAmI(25.276987, 55.296249);

// whereAmI();

function getCountryData(country) {
  getJson(
    `https://restcountries.eu/rest/v2/name/${country}`,
    `Country not found!)`
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('');

      return getJson(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        `Neighbour not found!`
      );
    })
    .then(data2 => renderCountry(data2, 'neighbour'))
    .catch(err => {
      console.error(`${err}💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
}

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

function getJson(url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);

    return response.json();
  });
}
