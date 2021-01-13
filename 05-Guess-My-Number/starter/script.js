'use strict';

///////////////////////////////////////
// Project #1: GUESS MY NUMBER

// Setting up the game with global variables
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

// Global functions
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayNumber(number) {
  document.querySelector(".number").textContent = number;
}

function displayScore(score) {
  document.querySelector(".score").textContent = score;
}

// Reset the game
const resetButton = document.querySelector('.again');
resetButton.addEventListener('click', function () {
  displayNumber('?');
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
  displayMessage('Start guessing...');
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
    displayMessage('⛔️ No Number!')
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!')
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = score;
    displayNumber(secretNumber);

    // When guess is too high or low
  } else if (guess !== secretNumber) {

    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Number Too high!' : ' Number Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💔 You lost the game!');
      displayScore(0);
    }
  }
});
