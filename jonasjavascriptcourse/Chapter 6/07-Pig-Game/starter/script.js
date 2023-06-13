// 'use strict';
// // Selecting Elements
// const player0 = document.getElementById('player0');
// const player1 = document.getElementById('player1');

// let score0El = document.querySelector('#score--0');
// let score1El = document.querySelector('#score--1');
// score0El.textContent = 0;
// score1El.textContent = 0;

// let currentScore0 = document.querySelector('#current--0');
// let currentScore1 = document.querySelector('#current--1');

// let diceRollSum = 0;
// let diceRollNew = 0;

// const dice = document.querySelector('.dice');
// dice.classList.add('hidden');

// // Function to roll the dice and update the display
// function rollDice() {
//   diceRollNew = Math.trunc(Math.random() * 6) + 1;
//   diceRollSum += diceRollNew;

//   console.log(diceRollSum);
//   console.log(diceRollNew);

//   switch (diceRollNew) {
//     case 1:
//       dice.src = 'dice-1.png';
//       currentScore0.textContent = 0;
//       currentScore1.textContent = 0;
//       diceRollSum = 0;
//       diceRollNew = 0;

//       if (player0.classList.contains('player--active')) {
//         player0.classList.remove('player--active');
//         player1.classList.add('player--active');
//         diceRollSum = 0;
//         diceRollNew = 0;
//       } else {
//         player1.classList.remove('player--active');
//         player0.classList.add('player--active');
//         diceRollSum = 0;
//         diceRollNew = 0;
//       }
//       break;

//     default:
//       dice.src = `dice-${diceRollNew}.png`;
//       if (player0.classList.contains('player--active')) {
//         currentScore0.textContent = diceRollSum;
//       } else {
//         currentScore1.textContent = diceRollSum;
//         break;
//       }
//   }
//   dice.classList.remove('hidden');
// }

// function holdDice() {
//   if (player0.classList.contains('player--active')) {
//     score0El.textContent = parseInt(score0El.textContent) + diceRollSum;
//     diceRollSum = 0;
//     player0.classList.remove('player--active');
//     player1.classList.add('player--active');
//     currentScore0.textContent = 0;

//     if (score0El.textContent >= 100) {
//       player0.classList.add('player--winner');
//       document
//         .querySelector('.btn--roll')
//         .removeEventListener('click', rollDice);
//       document
//         .querySelector('.btn--hold')
//         .removeEventListener('click', holdDice);
//     }
//   } else if (player1.classList.contains('player--active')) {
//     score1El.textContent = parseInt(score1El.textContent) + diceRollSum;
//     diceRollSum = 0;
//     player1.classList.remove('player--active');
//     player0.classList.add('player--active');
//     currentScore1.textContent = 0;

//     if (score1El.textContent >= 100) {
//       player1.classList.add('player--winner');
//       document
//         .querySelector('.btn--roll')
//         .removeEventListener('click', rollDice);
//       document
//         .querySelector('.btn--hold')
//         .removeEventListener('click', holdDice);
//     }
//   }
// }

// function newGame() {
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   currentScore0.textContent = 0;
//   currentScore1.textContent = 0;
//   dice.classList.add('hidden');
//   player0.classList.remove('player--winner');
//   player1.classList.remove('player--winner');

//   player1.classList.remove('player--active');
//   player0.classList.add('player--active');
// }

// document.querySelector('.btn--roll').addEventListener('click', rollDice);
// document.querySelector('.btn--hold').addEventListener('click', holdDice);
// document.querySelector('.btn--new').addEventListener('click', newGame);

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
