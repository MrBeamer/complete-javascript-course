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

const game = {
  team1: 'Bayern munich',
  team2: 'Borrussia Dortmund',
  player: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printWinner() {},

  printGoals(...players) {
    console.log(players);
    console.log(
      `Scorer: ${players} ${players.length} goals have fallen that game.`
    );
  },
};

const [players1, players2] = [...game.player];
console.log(players1);
console.log(players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1);
console.log(draw);
console.log(team2);

game.printGoals(...game.scored);
game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
