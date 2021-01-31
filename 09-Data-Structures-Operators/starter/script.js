'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, menuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[menuIndex]];
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with: ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza(ing1, ...restIng) {
    console.log(restIng);
    console.log(`Here is your delicious pizza with: ${ing1} and ${restIng}.`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Destructuring objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// restaurant;
// const {
//   name: restaurantName,
//   openingHours: time,
//   categories: dishes,
// } = restaurant;
// console.log(restaurantName, time, dishes);

// const { menu = [], starterMenu: appetizers = [] } = restaurant;
// console.log(menu, appetizers);

// const {
//   fri: { open, close },
// } = openingHours;

// Destructuring arrays

// let [main, secondary] = restaurant.categories;
// console.log('main ' + main);
// console.log('secondary ' + secondary);
// [secondary, main] = [main, secondary];
// console.log('main ' + main);
// console.log('secondary ' + secondary);

// restaurant.order(2, 0);
// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter);
// console.log(mainCourse);

// const nest = [2, 4, [5, 6]];
// const [two, , [five, six]] = nest;

// const [p, q, r = 'test'] = [5, 8];
// console.log(q, p, r);

// Spread operator arrays

// const newMenu = ['Rice', ...restaurant.starterMenu];

// console.log(newMenu);

// creates a copy of the starterMenu array
// const mainMenuCopy = [...restaurant.starterMenu];

// merges two arrays together

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

//Real world example
// const test = 'i will be spread over the world';

// const pastaOrder = [
//   prompt('Lets make pasta, Ingredient 1?'),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...pastaOrder);

// // Objects
// const newRestaurant = { foundedIn: 1994, owner: 'Tom', ...restaurant };
// console.log(newRestaurant);

// // create copy
// const copyRestaurant = { ...restaurant };
// copyRestaurant.name = 'Secret';
// console.log(copyRestaurant.name);
// console.log(restaurant.name);

// Rest

// Destructuring

// Spread operator because of the right site of the =
// const arr = [5, 6, 7, 8];
// const numbers = [4, ...arr];
// console.log(numbers);

// // Rest operator because of the left site of the =
// const [five, six, ...numbersRest] = arr;

// // object
// const { sat, ...otherDays } = restaurant.openingHours;
// console.log(otherDays);

// functions rest arguments
// function add(number, ...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   // numbers.forEach(number => {
//   //   sum += number;
//   // });

//   console.log('Numbers: ' + numbers);
//   console.log('Sum: ' + sum);
//   // console.log(number);
// }

// add(0);
// add(1, 2, 3, 4);
// add(1, 2, 3, 4, 5, 6, 7);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9);

// const pizzaOrder = [
//   prompt('Lets make pizza, Ingredient 1?'),
//   prompt('Rest Ingredient? '),
// ];

// restaurant.orderPizza('salami', 'cheese', 'bacon');
// restaurant.numberGuests = 23;

// console.log('---------OR---------');

// const guest1 = restaurant.numberGuests ? restaurant.numberGuests : 10;
// const guest2 = restaurant.numberGuests || 10;
// console.log(guest1);
// console.log(guest2);

// console.log('---------AND---------');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

///////////////////////////////////////
// CODING CHALLENGE #1:

// const game = {
//   team1: 'Bayern munich',
//   team2: 'Borrussia Dortmund',
//   player: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printWinner() {},

//   printGoals(...players) {
//     console.log(players);
//     console.log(
//       `Scorer: ${players} ${players.length} goals have fallen that game.`
//     );
//   },
// };

// const [players1, players2] = [...game.player];
// console.log(players1);
// console.log(players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1);
// console.log(draw);
// console.log(team2);

// game.printGoals(...game.scored);
// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const dish of fullMenu) console.log(dish);
// for (const dish of fullMenu.entries()) {
//   let [number, food] = dish;
//   console.log(`${number + 1}: ${food}`);
// }

// console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.mon?.open ?? 'This day dont exist.');

// const store = {
//   goods: {
//     consoles: {
//       xbox: 400,
//     },
//     phones: {
//       samsung: 500,
//       apple: 300,
//     },
//   },
// };

// console.log(store.goods.consoles?.ps5 ?? 'Ps5 is still sold out');

// const keys = Object.keys(restaurant.openingHours);
// console.log(keys);

// const values = Object.values(restaurant.openingHours);
// console.log(values);

// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}.`);
// }

///////////////////////////////////////
// CODING CHALLENGE #2:

// const game = {
//   team1: 'Bayern munich',
//   team2: 'Borrussia Dortmund',
//   player: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printWinner() {},

//   printGoals(...players) {
//     console.log(players);
//     console.log(
//       `Scorer: ${players} ${players.length} goals have fallen that game.`
//     );
//   },
// };

// // 1
// for (const [goal, player] of game.scored.entries()) {
//   console.log(`Goal ${goal + 1}:${player}`);
// }

// 2
// const oddValues = Object.values(game.odds);

// let odds = 0;

// for (const value of oddValues) {
//   odds += value;
// }

// const avgOdd = odds / oddValues.length;
// console.log(avgOdd);

// 3
// const entriesGame = Object.entries(game.odds);
// console.log(entriesGame);

// for (const [team, odd] of entriesGame) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

// bonus

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// const uniqueRoles = new Set([
//   'Master',
//   'Cook',
//   'Cook',
//   'Master',
//   'Model',
//   'Model',
//   'Dancer',
// ]);

// console.log(uniqueRoles.has('master'));
// for (const role of uniqueRoles) {
//   console.log(role);
// }
// console.log(uniqueRoles);
// uniqueRoles.add('Fucker');
// uniqueRoles.add('Fucker');
// console.log(uniqueRoles.size);
// const [master, cook, ...rest] = [...uniqueRoles];
// console.log(master, cook);
// console.log(rest);
// // console.log([...uniqueRoles]);

// const mapTesting = new Map();
// mapTesting
//   .set(true, 'I am a king.')
//   .set(false, 'I am not a king.')
//   .set('Pokemon', 'Pickachu');

// console.log(mapTesting);
// console.log(mapTesting.get(true));

// Maps: Iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // Quiz app
// // console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = Number(prompt(question.get('question')));

// // for (const [key, value] of question) {
// //   if (typeof value === 'number') {
// //     if (value === answer) {
// //       console.log(question.get(true));
// //     } else {
// //       console.log(question.get(false));
// //     }
// //   }
// // }
// console.log(question.get(question.get('correct') === answer));

// const arr = ['Test1', 'Test2', 'Test2', 'Test2', 'Test2', 'Test3'];
// const testSet = new Set(arr);

// console.log([...testSet]);

///////////////////////////////////////
// CODING CHALLENGE #3

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.

// const test = gameEvents.values();
// const set = new Set(test);
// console.log([...set]);

// console.log([...gameEvents]);

// const arr = [];
// for (const [time, event] of gameEvents) {
//   console.log(event);
//   arr.push(event);
//   // console.log([event]);
//   // console.log(time, test);
// }

// const filter = new Set(arr);
// console.log(filter);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2;
// gameEvents.delete(64);

// // 3.
// console.log(
//   `An event happen, on average, ever ${90 / gameEvents.size} minutes.`
// );

// for (const [time, event] of gameEvents) {
//   //1 option
//   // time <= 45
//   //   ? console.log(`[FIRST HALF] ${time}: ${event}`)
//   //   : console.log(`[SECOND HALF] ${time}: ${event}`);

//   // 2 option
//   let section = time <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${section} HALF] ${time}: ${event}`);

//3 option
// if (time <= 45) {
//   console.log(`[FIRST HALF] ${time}: ${event}`);
// } else {
//   console.log(`[SECOND HALF] ${time}: ${event}`);
// }
// }
// console.log('1234B'.slice(-1));

// function checkMiddleSeat(seat) {
//   const yesNo = seat.slice(-1) == 'B' || seat.slice(-1) == 'E' ? 'is' : "isn't";
//   console.log(`Seat: ${seat} ${yesNo} a middle seat.`);
//   // seat.slice(-1) == "B" || seat == "C" ? console.log(`Seat: ${} is a middle seat`) : console.log(`Seat: ${} isn't a middle seat`)
// }
// //B an E are middle seats
// checkMiddleSeat('11B');
// checkMiddleSeat('11C');
// checkMiddleSeat('3E');

// function correctSpelling(word) {
//   const rest = word.substring(1).toLowerCase();
//   const firstLetter = word[0].toUpperCase();
//   console.log(firstLetter + rest);
// }

// correctSpelling('joNaS');
// correctSpelling('DIETER');
// correctSpelling('tom');
// correctSpelling('FRIEda');

// const email = 'hello@jonas.io';
// let logEmail = '  Hello@Jonas.io \n';
// logEmail = logEmail.trim().toLowerCase();

// email === logEmail ? console.log('correct') : console.log('incorrect');

// const priceGB = '223,89$';
// const priceEU = priceGB.replace(',', '.').replace('$', ' Euro');
// console.log(priceGB);
// console.log(priceEU);

// const announcement =
//   'All passenger get to door 23, all passenger please go to door 23.';

// console.log(announcement.replaceAll('door', 'gate'));

// function checkLuggage(items) {
//   const luggage = items.toLowerCase();
//   if (luggage.includes('gun') || luggage.includes('knife')) {
//     console.log('You cant enter the plane.');
//   } else {
//     console.log('Happy, flight!');
//   }
// }
// checkLuggage('I have a laptop, some food and a pocket knife');
// checkLuggage('I have a pair socks, some snack and a pocket gun');
// checkLuggage('I have a pizza and some drinks ');

// const [firstName, lastName] = 'Michael Beamer'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// function capitalizeName(name) {
//   const newArr = [];
//   const arrNames = name.split(' ');
//   for (const n of arrNames) {
//     newArr.push(n[0].toUpperCase() + n.substring(1).toLowerCase());
//   }
//   console.log(newArr.join(' '));
// }

// capitalizeName('michael maurice beamer');
// capitalizeName('Lisa maivi nguyen');
// capitalizeName('john park johnson');
// capitalizeName('kimberly booty ungelenk');

// function maskCreditCard(number) {
//   const str = String(number);
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// }

// console.log(maskCreditCard(11112222));
// maskCreditCard('1123534453803');

///////////////////////////////////////
// CODING CHALLENGE #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');

// function camelCase() {
//   const textInput = document.querySelector('textarea').value;
//   const lowerCaseText = textInput.toLocaleLowerCase().trim();
//   const splitText = [lowerCaseText.split('\n')];
//   const splitText = [lowerCaseText.split('_')];
//   console.log(splitText);

//   const newArr = [];

//   for (const [word1, word2] of splitText) {
//     newArr.push(
//       word1 + word2[0].toUpperCase() + word2.substring(1).toLowerCase()
//     );
//   }
//   const camelCaseWord = newArr.join('');
//   console.log(camelCaseWord);
// }

// btn.addEventListener('click', camelCase);

// function camelCase() {
//   const textInput = document.querySelector('textarea').value;
//   const row = textInput.split('\n');
//   let iconCount = 0;

//   row.forEach(word => {
//     iconCount += 1;
//     const wordArr = word.trim().toLocaleLowerCase().split('_');
//     const [word1, word2] = wordArr;
//     const cameCaseWord = word1 + word2[0].toUpperCase() + word2.substring(1);

//     console.log(cameCaseWord.padEnd(20, ' ') + ' ✅'.repeat(iconCount));
//   });
// }

// btn.addEventListener('click', camelCase);
