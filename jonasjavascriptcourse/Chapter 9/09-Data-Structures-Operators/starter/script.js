'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// --------------------- MAPS FUNDAMENTALS START --------------------
/*
 * Maps are more useful than SETS
 * Maps are data structures used to map VALUES to KEYS
 * The biggest difference between OBJECTS and MAPS, is that in MAPS, keys cam have any TYPE (in OBJECTS, keys are always strings).
 * The easiest way to create a MAP, is to create an empty MAP
 * There is a lot of overlay between MAPS and SETS since they were both introduced in ES6
 */

/*
// Create a new empty MAP
const rest = new Map();
// To fill up a new MAP, you can use the set method, and pass in two arguments. First the KEY name, and the VALUE:
rest.set('name', 'Classico Italiano');
// Calling the SET method like this, not only UPDATES, but also RETURNS the map
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
// We can also chain SETS when feeding our MAP like so:
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
// In order to GET data from a map, we use the GET method, passing the name of the key you want:
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// With the HAS method, we can check wether our map contains a certain key
console.log(rest.has('categories'));
// It's also possible to DELETE elements from a MAP with the DELETE method:
rest.delete(2);
console.log(rest);
// With the CLEAR property we can empty a map of all its elements:
rest.clear();
// MAPS also have the size property, which can be called as so:
console.log(rest.size);
// It's also possible to use ARRAYS and OBJECTS as MAP KEYS:
rest.set([1, 2], 'Test');
console.log(rest);
// If we try to call the ARRAY from the example above we get an UNDEFINED:
console.log(rest.get([1, 2]));
// In order to access the 'Test' value, we'd need to declare a new variable with the [1, 2] ARRAY and assign that that variable to the MAP and use the .get method on that variable in order to avoid the UNDEFINED like so:
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
//As we've seen with the examples above we can 100% use objects as map keys. This is very uselful with "dumb elements" (these are nothing more than a speciial type of object) Let's check it out:
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
*/
// ---------------------- MAPS FUNDAMENTALS END ---------------------

// ---------------------- MAPS ITERATION START ----------------------
/*
 * There is another way of populating a new MAP without using the SET method. (SET can be a bit cumbersome to use when we have too many values to SET )
 *This method of creating a map is more "inuitive" per-se, but when you need to add new elements your MAP, it's best to do it programatically, how we've done in the MAPS FUNDAMENTALS portion.
 */
/*
// In this example we'll create a new map holding an ARRAY, which will itself hold many other ARRAYS. In each of these ARRAYS, the first position is the KEY, and the second is the VALUE.

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!!'],
  [false, 'Try again!'],
]);
console.log(question);

// As an aside, the structure we've built above (and ARRAY of ARRAYS), is the same ARRAY structure that is returned from calling "Object.entries()" see below for an example of how to convert an OBJECT into a new MAP:

const hoursMap = new Map(Object.entries(openingHours));
// BEFORE
console.log(Object.entries(openingHours));
// AFTER
console.log(hoursMap);

// Regarding ITERATION, it's also available for MAPS because they're  also ITERABLES. In the example below we'll use a FOR loop on our "question" MAP.
// First we'll start by saying what we will loop over, next since each item of the "question" map contains both a KEY and a VALUE, we can destructure both into separate values with the FOR loop.

// OBS. This is the same process we go through when looping over OBJECTS. The only difference is that for an OBJECT, we need to use "Object.entries()" in the FOR loop. The reason being because objects by themselves are not iterables, but we can convert them into iterables using the "Object.entries()" method.

// In the FOR loop below we'll target only the answer items in our map. We do so by specifying with an IF STATEMENT that we only want to log out KEY and VALUE pairs of KEYS with a NUMBER typage.

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer:'));
console.log(answer);

// In the line of code below we compare our user's PROMPTED answer with the VALUE associated with the correct KEY (which is 3). In turn this comparisson returns a BOOLEAN VALUE of TRUE or FALSE. Since the RETURNED VALUE is a BOOLEAN, we can directly plug that into the MAP, which finally RETURNS either "Correct!!" or "Try Again!". By doing this we are using the power of having BOOLEAN VALUES as KEYS in our MAP.
console.log(question.get(question.get('correct') === answer));

// *** Lastly we can also CONVERT a MAP into an ARRAY ***
// This is accommplished by building a new ARRAY, and unpacking again using the SPREAD(...) operator. Lets test this with our "question" MAP:
console.log([...question]);
// Obs. You can also get either the KEYS or VALUES individually if you need them like below:
console.log([...question.values()]);
console.log([...questions.keys()]);
*/
// ----------------------- MAPS ITERATION END -----------------------

// -------------------- WORKING WITH SETS START --------------------
// Working with SETS

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);
// console.log(new Set('Jonas'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet);
// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );
// console.log(new Set('JonasPoopman').size);

// // Property WHOLE
// const entries = Object.entries(openingHours);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days of the week `;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// -------------------- WORKING WITH SETS END ----------------------

// OPTIONAL CHAINING
// Old way without Optional Chaining:
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// New way with Optional Chaining:
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we open at ${open}`);
// }

// // Optional Chaining Methods
// console.log(restaurant.order?.(0, 1) ?? `Method doesn't exist`);
// console.log(restaurant.orderRisotto?.(0, 1) ?? `Method doesn't exist`);

// // Optional Chaining on Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.com' }];
// console.log(users[0]?.name ?? 'User array empty');
// console.log(users[1]?.name ?? 'User array empty');

// Looping Arrays with FOR-OF Loops
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or "")
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

/*
// Short Circuiting (&& and ||)

console.log('------- OR -------');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------- AND -------');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 & null & 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

/*

// 1. DESTRUCTURING

// SPREAD, because located in the RIGHT side of the comparisson operator
const arr = [1, 2, ...[3, 4]];

// REST, because located in the LEFT side of the comparisson operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays2 } = restaurant.openingHours;
console.log(weekdays2);
console.log(sat);

// 2. FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);

  console.log(numbers);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 Arrays or More
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterrables: arrays, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// The code below doesn`t work because multiple values separated with a comma only work when we pass arguments into a function, or when we build a new array.
// console.log(`${...str} Poopman`)

// Real-world Example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Johnny' };

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/
// ---------------WHICH DATA STRUCTURE TO USE? START------------------
/*
There are 4 types of DATA STRUCTURES we can use in JavaScript. In order to choose between them you can begin by asking yourself:

1. Do we just need a SIMPLE LIST of VALUES?
If the answer is YES. We can opt for an ARRAY or SET.
In a list like an ARRAY or SET, we ONLY have VALUES, without any description.

2. Do we need KEY/VALUE pairs?
If the answer is YES. We need OBJECTS or MAPS.
The key difference here is that with a KEY/VALUE pair we have a way of DESCRIBING the VALUES we're working with

It's important to note that the most common source of data we'll be working with, will be coming from web APIs. Data from APIs usually come in a special data format called JSON.

3. What is a JSON?
A JSON is essentially just a long string of text that can easily be converted into a JavaScript OBJECT becuase it uses the same formatting as JavaScript OBJECTS and ARRAYS.

4. ARRAYS VS. SETS
When should you use ARRAYS?
* When you need ORDERED lists of VALUES (might contain duplicates)
* When you need to MANIPULATE data

When should you use SETS?
* When you need to work with UNIQUE values
* When HIGH-PERFORMANCE is really important (SETS can perform 10x faster than ARRAYS)
* To REMOVE DUPLICATE data from ARRAYS

OBS. It's important to note that SETS are not meant to replace ARRAYS, but rather to compliment them when we are dealing with unique VALUES.
*/

// ----------------WHICH DATA STRUCTURE TO USE? END-------------------
