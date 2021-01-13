'use strict';

// Selecting Buttons
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// Selecting Dice
let diceImg = document.querySelector('.dice');

// Selecting current score of Player 1 and Player 2
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Selecting score of Player 1 and Player 2
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

// Selecting Player 1 or 2
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0; // switches between 0 and 1
let playingGame = true;

console.log(playingGame);

// Move to better place
diceImg.classList.add('hidden');

// Generates random dice roll number
function randomDiceRoll() {
  if (playingGame) {
    diceImg.classList.remove('hidden');
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    changeDiceImage(randomNumber);
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      if (!player1El.classList.contains('player--active')) {
        player1El.classList.add('player--active');
        player0El.classList.remove('player--active');
        activePlayer = 1;
      } else {
        player0El.classList.add('player--active');
        player1El.classList.remove('player--active');
        activePlayer = 0;
      }
    }
  }
}

// Triggers rolls the dice
btnRollDice.addEventListener('click', randomDiceRoll);

// Triggers holds/save the score => transfers current score to main score
btnHold.addEventListener('click', saveScore);

// Triggers reset of the game
btnNew.addEventListener('click', resetGame);

// function that transfers current score to main score and saves it
function saveScore() {
  if (playingGame) {
    // add score to the right player
    if (activePlayer === 0) {
      scores[0] += currentScore;
      score0El.textContent = scores[0];
    } else {
      scores[1] += currentScore;
      score1El.textContent = scores[1];
    }
    currentScore = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    // check which player won
    if (scores[activePlayer] >= 100) {
      playingGame = false;
      diceImg.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch player maybe make a function
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      if (!player1El.classList.contains('player--active')) {
        player1El.classList.add('player--active');
        player0El.classList.remove('player--active');
        activePlayer = 1;
      } else {
        player0El.classList.add('player--active');
        player1El.classList.remove('player--active');
        activePlayer = 0;
      }
    }
  }
}

// Changes image of dice according to rolled random number
function changeDiceImage(randomDiceRoll) {
  switch (randomDiceRoll) {
    case 1:
      diceImg.src = 'dice-1.png';
      break;
    case 2:
      diceImg.src = 'dice-2.png';
      break;
    case 3:
      diceImg.src = 'dice-3.png';
      break;
    case 4:
      diceImg.src = 'dice-4.png';
      break;
    case 5:
      diceImg.src = 'dice-5.png';
      break;
    case 6:
      diceImg.src = 'dice-6.png';
      break;
    default:
      console.log('Error!');
      break;
  }
}

function resetGame() {
  playingGame = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
