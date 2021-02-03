'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

function displayMovement(movements, sort = false) {
  containerMovements.innerHTML = '';

  const mov = sort ? movements.slice().sort((a, b) => a - b) : movements;

  mov.forEach((movement, index) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
                    <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
                    <div class="movements__date">3 days ago</div>
                    <div class="movements__value">${movement}€</div>
                   </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

let sorted = false;
btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//calc and display balance

function calcDisplayBalance(acc) {
  const balance = acc.movements.reduce((sum, mov) => {
    return sum + mov;
  }, 0);

  labelBalance.textContent = `${balance}€`;
  currentAccount.balance = balance;
}

// summary

function calcDisplaySummary(acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;
  currentAccount.income = incomes;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  currentAccount.outcome = outcomes;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(depo => (depo * currentAccount.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
  currentAccount.interest = interest;
}

// Computing usernames
function createUsernames(accounts) {
  accounts.forEach(acc => {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(namePart => namePart[0])
      .join('');
  });
}
createUsernames(accounts);

function updateUi(acc) {
  displayMovement(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
}

//Event listener login
let currentAccount;
let currentPin;

btnLogin.addEventListener('click', function (event) {
  event.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    updateUi(currentAccount);

    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();
    console.log('Login');
  }
});

//transfer money
btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();

  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);

  console.log(amount, receiverAccount);

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUi(currentAccount);
    inputTransferTo.value = inputTransferAmount.value = '';
  }
});

btnLoan.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUi(currentAccount);
    inputLoanAmount.value = '';
  }
});

//close account
btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  const targetUsername = inputCloseUsername.value;
  const targetPin = Number(inputClosePin.value);
  if (
    // accounts[accIndex].username === targetUsername &&
    // accounts[accIndex].pin === targetPin
    currentAccount.username === targetUsername &&
    currentAccount.pin === targetPin
  ) {
    const accIndex = accounts.findIndex(acc => acc.username === targetUsername);
    accounts.splice(accIndex, 1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Bye ${
      currentAccount.owner.split(' ')[0]
    } comeback soon`;
    function reset() {
      labelWelcome.textContent = 'Log in to get started';
    }
    setTimeout(reset, 4000);
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//convert currencies

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//filter movements

// const deposit = movements.filter(mov => mov > 0);
// const withdrawal = movements.filter(mov => mov < 0);

// console.log(deposit);
// console.log(withdrawal);

// // current balance
// const balance = movements.reduce((sum, value) => {
//   return sum + value;
// }, 0);

// console.log(balance);

/////////////////////////////////////////////////
// Coding Challenge #1

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// function checkDogs(dogsJulia, dogsKate) {
//   const correctJulia = [...dogsJulia].slice(1, -2);

//   const dogArr = [...correctJulia, ...dogsKate];
//   dogArr.forEach((dog, index) => {
//     const lifeStage = dog >= 3 ? 'adult' : 'puppy';

//     console.log(
//       `Dog number ${index + 1} is an ${lifeStage}, and is ${dog} years old`
//     );
//   });
// }

// checkDogs(dogsJulia, dogsKate);

// const eurToUsd = 1.1;

// const moveUsd = movements.map(movement => movement * eurToUsd);

// console.log(moveUsd);

//max value

// const max = movements.reduce((sum, mov) => {
//   if (sum > mov) {
//     return sum;
//   } else {
//     return mov;
//   }
// }, movements[0]);
// console.log(max);

// const max = movements.reduce(
//   (sum, mov) => (sum > mov ? sum : mov),
//   movements[0]
// );
// console.log(max);

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// function calcAverageHumanAge(ages) {
//   const humanAges = ages.map(dogAge => {
//     if (dogAge <= 2) {
//       return 2 * dogAge;
//     } else if (dogAge > 2) {
//       return 16 + dogAge * 4;
//     }
//   });

//   const humanAgesFiltered = humanAges.filter(dogAge => {
//     return dogAge >= 18;
//   });

//   const humanAgesAvg =
//     humanAgesFiltered.reduce((acc, age) => {
//       return Math.floor(acc + age);
//     }) / humanAgesFiltered.length;

//   console.log(ages);
//   console.log(humanAges);
//   console.log(humanAgesFiltered);
//   console.log(humanAgesAvg);
// }

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// const eurToUsd = 1.1;
// const totalDepoInUsd = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepoInUsd);

// const accountMov = accounts.flatMap(mov => mov.movements);
// console.log(accountMov);

// const newArr = accountMov
//   .flatMap(mov => mov)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(newArr);
// const test = document.querySelectorAll('.movements__value');

// test.forEach(el => console.log(el));
// console.log(test);

//// array methods practice
// 1
// const sumDeposit = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov);
// console.log(sumDeposit);

// // 2
// const depositAbove = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

// console.log(depositAbove);

//3 this is a nice title

// const strTest = 'this is a nice title';
// function convertTitleCase(str) {
//   const exceptions = ['a'];
//   console.log(
//     str
//       .split(' ')
//       .map(word =>
//         exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(' ')
//   );
// }

// convertTitleCase(strTest);

///////////////////////////////////////
// Coding Challenge #4

// Test data
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1
dogs.forEach(dog => {
  dog.recommendedFood = Math.floor(dog.weight ** 0.75 * 28);
});

// 2
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating to ${
    sarahDog.curFood > sarahDog.recommendedFood ? 'much' : 'little'
  }`
);

//3
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

//4
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

//5
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

//6
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

//7
const okayDogs = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);

//8
const shallowDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(shallowDogs);
