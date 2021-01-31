'use strict';

// const bookings = [];

// function createBooking(
//   flightNum,
//   numPassengers = 1,
//   price = 200 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// }

// createBooking('LH23', 2);
// createBooking('LH26', 2, 999);
// console.log(bookings);

// const flight = 'LH24';

// const michael = {
//   name: 'Michael Beamer',
//   passport: 66969696969,
// };

// function checkIn(flightNum, passenger) {
//   flightNum = 'LH25';
//   passenger = 'Mr ' + michael.name;

//   if (michael.passport === 66969696969) {
//     alert('Please, check in.');
//   } else {
//     alert('Wrong passport.');
//   }
// }

// checkIn(flight, michael);
// console.log(flight);
// console.log(michael);

// function oneWord(str) {
//     str.replace(/ /g, "").toLowerCasw();
// )

// function upperFirstWord(str){
// const [first, ...others] = str.split(" ")
// return [first.toUpperCase(), ...others].join("");

// }

// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// greet('hello')('michael');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };
// lufthansa.book(234, 'Michael');
// lufthansa.book(635, 'Kimberley');
// console.log(lufthansa);

// const book = lufthansa.book;

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
//   book,
// };
// eurowings.book(234, 'Michael');
// eurowings.book(635, 'Kimberley');

// lufthansa.planes = 300;
// lufthansa.buyplane = function () {
//   this.planes++;
//   console.log(this.planes);
//   console.log(this);
// };

// const buyBtn = document.querySelector('.buy');
// const buyLHplane = lufthansa.buyplane.bind(lufthansa);

// buyBtn.addEventListener('click', buyLHplane);

// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };
// console.log(greet());
// greet('hello');

// function addTaxRate(rate) {
//   console.log(rate);
//   return function (value) {
//     console.log(rate);
//     console.log(value);
//     return value + value * rate;
//   };
// }
// const portoTax = addTaxRate(0.23);
// console.log(portoTax(100));

// const addVat = addTax.bind(null, 0.23);

///////////////////////////////////////
// Coding Challenge #1

// Here are your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)

//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n ${this.options.join('\n')}\n (Write option number)`
//       )
//     );
//     if (typeof answer === 'number' && answer < this.answers.length) {
//       this.answers[answer]++;
//     }
//     this.displayResults('string');
//     this.displayResults();
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// const pollBtn = document.querySelector('.poll');

// pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

///////////////////////////////////////
// Coding Challenge #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'purple';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
