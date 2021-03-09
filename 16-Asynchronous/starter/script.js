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

function getJson(url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);

    return response.json();
  });
}

// getCountryData('australia');

// CODING CHALLENGE 1

// function whereAmI(lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(
//           `Caution 💥, you are reloading the webpage to fast! (Error: ${response.status})`
//         );
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}.`);
//       let country = data.country;

//       getCountryData(country);
//     })
//     .catch(err => console.error(`${err}`));
// }

// // whereAmI(52.508, 13.381);
// whereAmI(51.5, 0.1167);
// // whereAmI(-33.933, 18.474);
// // whereAmI(25.276987, 55.296249);

// // whereAmI();

// function getCountryData(country) {
//   getJson(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     `Country not found!)`
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
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

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000; i++) console.log(res);
// });

// console.log('Test end');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening ');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You won the lottery⭐️');
//     } else {
//       reject(new Error('You did not won the lottery💥'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// getPosition()
//   .then(res => console.log(res))
//   .catch(err => console.log(new Error(err)));

//////////////////////////
// CODING CHALLENGE 2

// function wait(seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// }

// function createImage(imgPath) {
//   return new Promise(function (resolve, reject) {
//     let img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       document.querySelector('.images').appendChild(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// }

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('image 1 loaded ');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('image 2 loaded ');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// function createImage(imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       document.querySelector('.images').append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('Image not found.'));
//     });
//   });
// }

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     console.log(' Image 1 loaded.');
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     console.log(' Image 2 loaded.');
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));
////////////////////////////////////////////////
// two different ways of getting the response
// async is the new and easier way

// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// async function whereAmI() {
//   try {
//     const position = await getPosition();
//     const { latitude: lat, longitude: lng } = position.coords;
//     // fetch(`https://restcountries.eu/rest/v2/name/`).then(response => {
//     //     console.log(response);
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data.');
//     const dataGeo = await resGeo.json();
//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );
//     if (!resGeo.ok) throw new Error('Problem getting country data.');
//     const data = await res.json();
//     renderCountry(data[0]);
//     countriesContainer.style.opacity = 1;
//     return `Your in ${dataGeo.city} and in ${dataGeo.country}`;
//   } catch (err) {
//     console.log(err);
//     renderError('Something went wrong 💥');
//     throw err;
//   }
// }

// // whereAmI();

// console.log(`1: Will get the location`);

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message}💥`);
//   }
//   console.log(`3: Finished getting location`);
// })();

// async function get3Countries(c1, c2, c3) {
//   try {
//     // const [data1] = await getJson(
//     //   `https://restcountries.eu/rest/v2/name/${c1}`
//     // );
//     // const [data2] = await getJson(
//     //   `https://restcountries.eu/rest/v2/name/${c2}`
//     // );
//     // const [data3] = await getJson(
//     //   `https://restcountries.eu/rest/v2/name/${c3}`
//     // );
//     // console.log([data1.capital, data2.capital, data3.capital]);
//     const data = await Promise.all([
//       getJson(`https://restcountries.eu/rest/v2/name/${c1}`),
//       getJson(`https://restcountries.eu/rest/v2/name/${c2}`),
//       getJson(`https://restcountries.eu/rest/v2/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.log(err);
//   }
// }

// get3Countries('germany', 'portugal', 'spain');

// Promise.race()

// (async function () {
//   const res = await Promise.race([
//     getJson(`https://restcountries.eu/rest/v2/name/italy`),
//     getJson(`https://restcountries.eu/rest/v2/name/spain`),
//     getJson(`https://restcountries.eu/rest/v2/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// async function timeout(sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took to long'));
//     }, sec * 1000);
//   });
// }

// Promise.race([
//   getJson(`https://restcountries.eu/rest/v2/name/germany`, timeout(0.1)),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.log(err));
////////////////////////////////////////
// CODING CHALLENGE 3

///// PART 1

function wait(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      document.querySelector('.images').appendChild(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
}

// then version

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     console.log(' Image 1 loaded.');
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     console.log(' Image 2 loaded.');
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// async await version

// async function loadNPause() {
//   try {
//     const img1 = await createImage('img/img-1.jpg');
//     await wait(2);
//     img1.style.display = 'none';
//     const img2 = await createImage('img/img-2.jpg');
//     await wait(2);
//     img2.style.display = 'none';
//   } catch (err) {
//     console.log(err);
//   }
// }

// loadNPause();

/// PART 2

async function loadAll(imgArr) {
  const imgs = imgArr.map(img => createImage(img));
  const newImgs = await Promise.all(imgs);
  newImgs.forEach(img => img.classList.add('parallel'));
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
