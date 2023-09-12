'use strict';
/*
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

// -------------------------------------------------------------
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
  <div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__value">${mov}€</div>
</div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// ------------------------------------------------------------

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// ------------------------------------------------------------
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUsd = movements.map(mov => mov * eurToUsd);

console.log(movementsUsd);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementDescriptions);
// ------------------------------------------------------------

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);
console.log(accounts);
// ------------------------------------------------------------

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display Summary
  calcDisplaySummary(acc);
};

// ------------------------------------------------------------

const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const withdrawls = movements.filter(mov => mov < 0);
console.log(withdrawls);

// ------------------------------------------------------------

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// ------------------------------------------------------------

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

// ------------------------------------------------------------
// inputLoginUsername;
// inputLoginPin;
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submiting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Welcome Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movement.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

console.log(movements);
console.log(movements.includes(-130));

const anyDeposits = movements.some(mov => mov > 5000);
console.log(anyDeposits);

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// ---------------------------------------------------------

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);
// console.log('---------------');

// // SPLICE
// // console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// currencies.forEach(function (a, b) {
//   console.log(`${b}: ${a}`);
// });

// const currenciesUnique = new Set(['USD', 'GPB', 'EUR', 'USD', 'EUR', 'EUR']);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}`);
// });

// const dogAge = [5, 2, 4, 1, 15, 8, 3];

// dogAge.forEach(function (number) {
//   if (number <= 2) {
//     return console.log(2 * number);
//   } else {
//     return console.log(16 + number * 4);
//   }
// });

// const calcAverageHumanAge = function (arr) {
//   return arr
//     .map(arr => (arr <= 2 ? 2 * arr : 16 + arr * 4))
//     .filter(arr => arr > 18)
//     .reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// const calcAverageHumanAge = ages =>
//   ages
//     .map(ages => (ages <= 2 ? 2 * ages : 16 + ages * 4))
//     .filter(ages => ages >= 18)
//     .reduce((ages, cur, _, arr) => ages + cur / arr.length, 0);

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// const firstWithdrawl = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawl);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// 2.
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => (cur >= 1000 ? ++acc : acc), 0);
console.log(numDeposits1000);

// 3.
const { deposits2, withdrawls2 } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits2 += cur) : (sums.withdrawls2 += cur);
      sums[cur > 0 ? 'deposits2' : 'withdrawls2'] += cur;
      return sums;
    },
    { deposits2: 0, withdrawls2: 0 }
  );
console.log(deposits2, withdrawls2);

// 4.
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');

  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

*/

// -------------------------------------------------------------
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// // 1. Recommended Food For Each Dog

// dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// // 2. Find Sarah's dog and Say if it's eating too much or too little

// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(
//   `Sarah's dog is eating ${
//     dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
//   }`
// );

// // 3. Owners and how much their dogs eat

// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);

// // 4.4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

// console.log(`${ownersEatTooMuch.join(' and ')}'s dog eats too much!`);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dog eats too much!`);

// // 5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)

// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// // 6. Log to the console whether there is any dog eating an okay amount of food (just true or false)

// const checkEatingOkay = dog =>
//   dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
// console.log(dogs.some(checkEatingOkay));

// // 7. Create an array containing the dogs that are eating an okay amount of food (tryto reuse the condition used in 6.)

// console.log(dogs.filter(checkEatingOkay));

// // 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the   array's objects �)

// const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(dogsSorted);
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
sarahDog.curFood > sarahDog.recFood
  ? console.log('Eating too much')
  : console.log('Eating too little');

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eats too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eats too little!`);

// 5.
console.log(dogs.some(dog => dog.recFood === dog.curFood));

// 6.
const eatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(eatingOkay));

// 7.
console.log(dogs.filter(eatingOkay));

// 8.
const dogsFiltered = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsFiltered);
