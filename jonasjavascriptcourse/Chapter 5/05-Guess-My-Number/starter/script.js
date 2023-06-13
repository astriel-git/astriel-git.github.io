'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const changeBackgroundColor = function (rgbnumber) {
  document.querySelector('body').style.backgroundColor = rgbnumber;
};
const scoreBoxWidth = function (boxwidth) {
  document.querySelector('.number').style.width = boxwidth;
};
const scoreBoxNumber = function (secret) {
  document.querySelector('.number').textContent = secret;
};
const scoreBoard = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // -------------------FUNCTION RESET THE GAME BACK TO DEFAULT-----------------
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';

    scoreBoard(score);
    displayMessage('Start guessing...');
    scoreBoxNumber('?');
    changeBackgroundColor('#222');
    scoreBoxWidth('15rem');
  });

  // ---------------------IF THE CHOSEN NUMBER IS 0 OR EMPTY--------------------
  if (!guess) {
    displayMessage('⛔ No number!');
    // -----------------------IF THE CHOSEN NUMBER CORRECT----------------------
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number');
    changeBackgroundColor('#60b347');
    scoreBoxWidth('30rem');
    scoreBoxNumber(secretNumber);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // ------------------------IF THE CHOSEN NUMBER IS WRONG--------------------
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High' : '📈 Too low!';
      score--;
      scoreBoard(score);
    } else {
      displayMessage('💥 YOU LOSE THE GAME');
      changeBackgroundColor('#ff3333');
      scoreBoxWidth('30rem');
      scoreBoxNumber(secretNumber);
      scoreBoard(0);
    }
  }
});
