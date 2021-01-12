'use strict';

///////////////////////////////////////
// Project #1: GUESS MY NUMBER

// Setting up the game with global variables
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
console.log(secretNumber);

// Reset the game
const resetButton = document.querySelector('.again');
resetButton.addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

// Start and play the game

const checkButton = document.querySelector('.check');

checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = secretNumber;

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💔 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' Number Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💔 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
