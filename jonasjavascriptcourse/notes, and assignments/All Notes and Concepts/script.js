'use strict';

/*
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

5. OBJECTS VS. MAPS
As we learned, we should use these KEY/VALUE data structures whenever we need to describe our VALUES using KEYS.

When should you use OBJECTS?

* Objects are more "traditional" key/value stores becuase MAPS didn't exist before ES6. But using OBJECTS merley as KEY/VALUE stores has a few technical disadvantages.

* The biggest advantage to OBJECTS, is how easy it is to write and access their data by simply using the . or [] operator.
 
In conclusion, you should work with OBJECTS when you need to include FUNCTIONS(methods), and when working with JSON(can convert to map later).

When should you use MAPS?

*As opposed to OBJECTS, MAPS are more efficient as simple KEY/VALUE stores because :

a. They offer better performance
b. Can have any DATA TYPE
c. Easy to iterate
d. Easy to compute the size of a MAP

As for MAPS, it's best to opt for a MAP when you simply need to map KEYS to VALUES, and when you require KEYS that aren't STRINGS.

*/

// ----------------WHICH DATA STRUCTURE TO USE? END-------------------

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
// This is accommplished by building a new ARRAY, and unpacking again using the SPREAD(...) operator. In this case, the "question" MAP:
console.log([...question]);
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

// -------------------- OPTIONAL CHAINING START ----------------------
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

// --------------------- OPTIONAL CHAINING END -----------------------

// -------------- LOOPING ARRAYS WITH FOR OF LOOPS START -------------

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
// --------------- LOOPING ARRAYS WITH FOR OF LOOPS END --------------

// --------------------- SHORT CIRCUITING START ----------------------

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
// ---------------------- SHORT CIRCUITING END -----------------------

// ---------------------- DESTRUCTURING START ------------------------

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
// ----------------------- DESTRUCTURING END -------------------------

// ---------------- WORKING WITH STRINGS pt.1 START-------------------
/*


const airline = 'TAP Air Portugal';
const plane = 'A320';

// Just like with ARRAYS, we can get the character of a string at a certain position:
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

// We can also log a character in a certain position directly:
console.log('B737'[0]);

//It's possible to read the length property of a string variable just like with ARRAYS as such (also possible to do so directly on the string):
console.log(airline.length);
console.log('B737'.length);

// String also work with METHODS, similar to ARRAYS. Let's start by trying out ".indexOf()" which logs out the position in which a certain letter is located.
console.log(airline.indexOf('r'));

// Note that .indexOf() will only give us the FIRST occurence. Let's say we want to know the last one though. In that case we use:
console.log(airline.lastIndexOf('r'));

// We can also search for entire words, but note that this METHOD is CASE-SENSITIVE, if we search for "portugal", we'll get a "-1" because the string we're searching for cannot be found:
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal'));

//Let's check out the ".slice()" method now. .slice() is useful when you already know the index of whatever it is you need. You can then, RETURN a value from the original STRING, starting from your specified INDEX position. In the example below we get the string "Air Portugal", the reason for this being that "[4]" is the "begin" parameter. Basically it's the position at which the extraction starts. The result we've got is also called a "SUBSTRING" because it's just a part of the original STRING.

// It's important to note that this method does not change the original STRING. The reason being that STRINGS can't be changed because they're PRIMITIVES. If we wanted to use the SLICED string, we'd need to first store it in a new VARIABLE, or DATA STRUCTURE.
console.log(airline.slice(4));

// We can also specify an "end paramater" as such (Note that the end value is not included in the output string. In this example index 7 was the empy space " ", and it wasn't included in our sliced string):
console.log(airline.slice(4, 7));

// Let's say we don't know the index of the words we're looking for. One way to log them out without hardcoding their paramaters is using the methods we just learned.

// By specifying "index 0" as the beggining parameter, and "airline.indexOf(" ") as the end parameter, we can log out the first word in our variable because .indexOf(" ") stops when it hits the first space in the string.
console.log(airline.slice(0, airline.indexOf(' ')));

// The same logic can be applied when searching for the last word in our string (The "+1" skips the space from the log, and starts directly at the "Portugal"):
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// These are the fundamentals of the .slice() method, but we can do even more with it. If we specify a negative index position, we start couting from the end of the string:
console.log(airline.slice(-2));

// We can also start slicing from a positive index, and finish on a negative position:
console.log(airline.slice(1, -2));

// As a practical exercise, here's a function that checks whether someone has gotten the middle or window seats on a plane:
const checkMiddleSeat = function (seat) {
  // .slice(-1) returns the last letter in a STRING
  const seatPosition = seat.slice(-1);
  if (seatPosition === 'B' || seatPosition === 'E')
    console.log('You got the middle seat...');
  else console.log('You got a window seat!!');
};
// B & E are middle seats
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// EXTRA: WHY METHODS WORK ON STRING PRIMITIVES

// Lets understand WHY all of this works, if STRINGS are just PRIMITIVES. How can they have METHODS? Shouldn't METHODS only be available on OBJECTS such as ARRAYS? That's true, but here's what's happening behind the scenes.

// Whenever a METHOD is called on a STRING PRIMITIVE, JavaScript converts that STRING PRIMITIVE to a STRING OBJECT with the same content, and it's then on that OBJECT where the METHODS are actually called. This process is called BOXING because it basically takes our string and places it into a box (which is the object).

// If you'd like a visual representation, what JavaScript does is call this string function:
console.log(new String("jonas"));
console.log(typeOf new String("jonas"));

//If we check it out, we'll see that it now looks a lot more like an object (because it is one). When the operation is done, the object is then converted back into a regular STRING PRIMITIVE, in fact all STRING METHODS return STRING PRIMITIVES, even when called directly on a STRING OBJECT, like so:
console.log(typeOf new String("jonas").slice(1));
*/

// ----------------- WORKING WITH STRINGS pt.1 END--------------------

// ---------------- WORKING WITH STRINGS pt.2 START-------------------
/*
// STARTER CODE:
const airline = 'TAP Air Portugal';
const plane = 'A320';

// Lets continue with more STRING METHODS
// We can transform a string into all lowercase, or uppercase with these two METHODS "toLowerCase()" and "toUpperCase()"
console.log(airline.toLowerCase());
console.log('jonas'.toUpperCase());

// PRACTICAL EXAMPLE #1. Fixing Capitalization In a Name:
const passenger = 'jOnAs'; //Jonas

// a. Put everything into lowercase
const passengerLower = passenger.toLowerCase();

// b. Now apply the .toUpperCase() method only to the first character in the STRING, and add the rest of the STRING with the SLICE METHOD
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Obs. This can be done more efficiently with a function, as so:
const correctSpelling = function (name) {
  name = name.toLowerCase();
  name = name[0].toUpperCase() + name.slice(1);
  console.log(name);
};
correctSpelling('pddFeter');

// PRACTICAL EXAMPLE #2. Comparing Emails:
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

// a. When checking user imput like this, it's best to start by converting the string into lowercase:
const lowerEmail = loginEmail.toLowerCase();

// b. We need to get rid of any extra spaces before and after the STRING:
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// c. There is yet another, shorter way of accomplishing the same result as above. The "loginEmail.toLowerCase()" returns a new STRING, and on STRINGS, we can call STRING METHODS, therefore we can immediatley call the .trim() method right after
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// d. As a best practice we can then finally compare both string to make sure we got identical results"
console.log(email === normalizedEmail);

// OBS. Regarding .trim(), as of ES 2019 we also have .trimStart() and .trimEnd(), which you can use to trim white-space only from the start or the end of a STRING

// PRACTICAL EXAMPLE #3. Replacing Parts of a String:
const priceUS = '$288,97';
const priceBR = priceUS.replace('$', 'R$').replace(',', '.');
console.log(priceUS);
console.log(priceBR);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
// You can use .replace() to change one instance of a word at a time. announcement.replace('door', 'gate'));

// And you can use .replaceAll() to target all instances at once
console.log(announcement.replaceAll('door', 'gate'));
// Yet a second way of replacing all instances of the word 'door' would be to use a REGULAR EXPRESSION. To accomplish this we put the string inbetween slashes instead of quotes, follwed by a 'g' which stand for "global"
console.log(announcement.replaceAll(/door/g, 'gate'));

// PRACTICAL EXAMPLE #4. Boolean Returning String Methods
const planeNeo = 'Airbus A320neo';
console.log(planeNeo.includes('neo'));
console.log(planeNeo.includes('Boeing'));
// As long as the string combo doesn't break, .startsWith() will return true
console.log(planeNeo.startsWith('Air'));

if (planeNeo.startsWith('Airbus') && planeNeo.endsWith('neo')) {
  console.log(`The ${planeNeo} is a part of the NEW Airbus family`);
}

// PRACTICAL EXAMPLE #5. Check if passengers bag is in the plane:
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed onboard');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

// ----------------- WORKING WITH STRINGS pt.2 END--------------------

// ---------------- WORKING WITH STRINGS pt.3 START-------------------
/*

// Let's start by learning about one of the most powerful STRING METHODS available. ".split()"

// ".split()" allows us to split a STRING into multiple parts based on a DIVIDER STRING.

// Inside the METHOD we will specify the divider, in this case "+", so this splits our STRING at every instance of "+" and stores the results into ELEMENTS of a new ARRAY:
console.log('a+very+nice+string'.split('+'));

// Let's try the same with a name:
console.log('Lucas Patricio'.split(' '));

// Now, this .split() when used in conjunction with destructuring can create variables directly like so:
const [firstName, lastName] = 'Lucas Patricio'.split(' ');

// The firstName an lastName variables are direct results of the ".split()" method. To break it down further. ".split()" creates an ARRAY with 2 entries. The first one "Lucas" gets assigned to the firstName variable, and "Patricio" into lastName.

// Now lets do the opposite. Lets .join() elements together
// Lets say you wanted to start the STRING with "Mr.", we can do so like this:

// We first declare a variable with an ARRAY of all the elements we want joined together, and at the end of the array we apply the ".join() method". Finally, our ARRAY transforms into a STRING joined together by our (" ") JOINER STRING
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// PRACTICAL EXAMPLE #1. Capitalizing Names
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // Option 1: Capitalize with ".toUpperCase()" and "slice()"
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // Option 2: Capitalize with ".toUpperCase() and ".replace()"
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('lucas patricio');

// PRACTICAL EXAMPLE #2. Padding
const message = 'Go to gate 23!';
// .padStart() can be used to add characters to the beggining of a string. The first argument it takes is the length we want for the string, and second, the character we want to pad the string with:
console.log(message.padStart(25, '+'));
// Now the length of our entire string is 25 characters long

// Since we have a .padStart(), we also have a .padEnd(), let's chain it to our last example:
console.log(message.padStart(25, '+').padEnd(38, '+'));

// PRACTICAL EXAMPLE #3. Credit Card Masking
const maskCreditCard = function (number) {
  // 1. Convert number into a string
  // Bonus Tip: If we add the NUMBER with an EMPTY STRING, we convert it into a STRING. This happens because whenever one of the operands of the "+" is a string, everything gets converted into one aswell
  const str = number + '';

  // 2. Slice the last 4 digits of our number, and add padding that matches the length of the original + the last 4 digits.
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(123456789));
console.log(maskCreditCard(324325325123858));
console.log(maskCreditCard('43241412343143214231551'));

// PRACTICAL EXAMPLE #4. ".repeat()" Method
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
*/
// ----------------- WORKING WITH STRINGS pt.3 END--------------------

// ------------------ STRING METHODS PRACTICE START-------------------
/*
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '⛔' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(50);
  console.log(output);
}
*/
// ------------------- STRING METHODS PRACTICE END -------------------

// ++++++++++++ CHAPTER 10 - A CLOSER LOOK AT FUNCTIONS +++++++++++++

// -------------------- DEFAULT PARAMETERS START ---------------------
/*
Sometimes it's useful to have functions where certain parameters are set by default. Thhis way we don't need to change them manually, if we don't need to change the default.

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // How to asign a default value before ES6:
  // const createBooking = function (flightNum, numPassengers, price) {
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  // The above works, becuase whenever the first value is a falsy value, which it is because it's "undefined", its value will default to whatever comes after our "OR" operator, in this case "1"

  // In ES6 forwards, it's much simples, the defaults are assigned directly onto the function parameters!

  // Default values in ES6 can also contain expressions, and even more useful, we can create these expressions using the values of our other specified parameters that were set BEFORE it.

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
// In order to SKIP A PARAMETER, we can specify that parameter as UNDEFINED, this way we'll get the default value we passed into the function at the start
createBooking('LH123', undefined, 1000);
*/

// --------------------- DEFAULT PARAMETERS END ----------------------

// ---------------- HOW PASSING ARGUMENTS WORKS START ----------------

/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/

// ----------------- HOW PASSING ARGUMENTS WORKS END -----------------

// ---------- FIRST CLASS AND HIGHER ORDER FUNCTIONS START -----------
/*

******************* PART 1 - FIRST-CLASS FUNCTIONS *******************
* JavaScript treats functions as "FIRST-CLASS CITIZENS"
* This means that functions are SIMPLY VALUES
* Functions are just another "type" of OBJECT

Since objects are values in JS, that means FUNCTIONS are too! This being the case, there are many things we can do with functions such as:

* Storing FUNCTIONS in VARIABLES, or OBJECT PROPERTIES

***Storing functions in variables or properties***
Example #1:
const add = (a, b) => a + b;

Example #2:
const counter = {
  value: 23,
  inc: function() {this.value++}
}

***Passing functions as arguments to OTHER functions***
Example #1:
const greet = () => console.log('Hey Jonas');
btnClose.addEventListener('click', greet);

***Return functions FROM functions***

***Call methods on functions***
As stated, FUNCTIONS are OBJECTS, and OBJECTS have METHODS, therefore FUNCTIONS also have their own METHODS!!

Example #1:
counter.inc.bind(someOtherObject);

****************** PART 2 - HIGHER-ORDER FUNCTIONS *******************
*A higher order function, is a function that RECIEVES another function as an argument, that RETURNS a NEW function, or BOTH (this is only possible because of first-class fucntions)

Example #1 - Functions that RECIEVE another function:
const greet = () => console.log('Hey Jonas');
btnClose.addEventListener('click', greet);

* In this example, "addEventListener" is a higher-order function.
Why? Because it recieves another function as its INPUT, in this case, the "greet" function. In these cases, we address the function that was passed in (greet), as the "CALLBACK FUNCTION", because it'll be called later by the higher-order function when the click event happens.

Example #2 - Functions that RETURN another function:
function count() { // THIS IS THE HIGHER-ORDER FUNCTION
  let counter = 0;
  return function() { // RETURNED FUNCTION
    counter++;
  };
}

***** Distinction between FIRST-CLASS and HIGHER-ORDER functions *****
First-Class Functions are a feature that a programming language either has or doesn't have. All it means is that all Functions are VALUES. That's all. There are no First-Class functions in practice. It's simply a programming concept.

Higher-Order Functions on the other hand do exist in PRACTICE. Which is made possible BECAUSE a language supports First-Class functions. It's a simple distinction, but notable if you want to address your code properly.

*/
// ----------- FIRST CLASS AND HIGHER ORDER FUNCTIONS END ------------

// ---------- FUNCTIONS ACCEPTING CALLBACK FUNCTIONS START -----------
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order Function - It's taking in a STRING, and a FUNCTION
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed By: ${fn.name}`);
};

transformer('JavaScript is the best!!', upperFirstWord);
transformer('JavaScript is the best!!', oneWord);

// JS Uses Call-Backs all the time. The first big advantage of this is that it makes it easy to split up our code into more reusable and interconnected parts. But there is in fact a second bigger advantage to them, which is that call-back functions allow us to create ABSTRACTION

// What is ABSTRATION?
// Abstraction means that we HIDE the detail of some code implementation because we don't really care about all that detail, which allows us to think about problems at a higher more abstract level.

// Coming back to the TRANSFORMER function example. Transformer doesn't care about HOW the text is transformed. That reasoning happens outside of the transforner function, within seperate functions, which in higher-level problems, would allow us to focus on more pressing issues within the transformer function. In other words, we abstracted some of the complexity within the transformer function away from it.


const high5 = function () {
  console.log('✋🏻');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
*/
// ----------- FUNCTIONS ACCEPTING CALLBACK FUNCTIONS END ------------

// -------------- FUNCTIONS RETURNING FUNCTIONS START ----------------
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');
greet('Hello')('Jonas');

// Challenge, Re-create the above function using ARROW FUNCTIONS
const arrowHey = hello => name => console.log(`${hello} ${name}`);
arrowHey('Hi')('Boobie');
*/
// --------------- FUNCTIONS RETURNING FUNCTIONS END ------------------

// ---------------- THE CALL AND APPLY METHODS START ------------------
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // Old Syntax - book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtman');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const euroWings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// CALL METHOD EXPLANATION:

// Look at this line of code:
// book(23, 'Sarah Williams');
// We are calling the "book" function which is inside the Lufthansa object. We're feeding it the "flightNum, and name" parameters, but it returns an error message because of the "this" keyword. By calling the book function in this manner, it doesn't know what "this" is. In order to call this function AND specify what the "this" is, we need to use a FUNCTION METHOD. In this case, the "CALL" METHOD.

book.call(euroWings, 23, 'Sarah Williams');
// Observe the revised version above. First we specify the funtion we're calling "book", next we apply the ".call" method, and we add the object we're targeting before the function parameters. This way "this.bookings.push()" knows that the object we're working with is NOT lufthansa, but indeed EuroWings.

const swissAir = {
  airline: `Swiss Air Lines`,
  iataCode: `LX`,
  bookings: [],
};

book.call(swissAir, 583, 'Mary Cooper');

// APPLY METHOD EXPLANATION:
// .apply() and .call() do basically the same thing, with the difference being that .apply() does not recieve a list of arguments after the ".this" keyword. Instead it takes an ARRAY of the arguments. Taking the elements of that ARRAY, and passing them into the FUNCTION

// Let's create an array with the flightNum, and name parameters:
const flightData = [583, 'George Jones'];
book.apply(swissAir, flightData);
console.log(swissAir);

// The .apply() method isn't really all that in modern JavaScript, because there's a better way to do it also using the .call() METHOD:

// By using the SPREAD OPERATOR on the ARRAY we achieve the exact same result.
book.call(swissAir, ...flightData);
*/
// ---------------- THE CALL AND APPLY METHODS END ------------------

// --------------------- THE BIND METHOD START ----------------------
/*
// STARTER CODE ⬇
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // Old Syntax - book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const book = lufthansa.book;

const euroWings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const swissAir = {
  airline: `Swiss Air Lines`,
  iataCode: `LX`,
  bookings: [],
};
// STARTER CODE ⬆

/*
Just like the .call() method, we can use .bind() to manually set the "this" keyword for any function call.

The big difference here, is that .bind() doesn't immediately call the function. Instead it returns a new function, in which the "this" keyword is newly bound.

*/
/*
const bookEW = book.bind(euroWings); // This method makes it so that a NEW function is created, where the THIS keyword will always be set to EuroWings
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swissAir);

bookEW(23, 'Steven Williams');
bookEW(23, 'John Peter');
console.log(euroWings);

// In the .call() METHOD we can pass multiple argumemnts besides the "this" keyword. In the bind method, we can do the same. Doing so with .bind() means those arguments will always be set in stone. Sticking with the airline example. By using .bind() we can create a function for one specific airline and flight number:

const bookEW23 = book.bind(euroWings, 23);
// Obs. Specifying parts of a function's arguments like we've done here, is known as "partial appliction"

bookEW23('Peter Pica');
bookEW23('Martha Coopers');

// Bind Method with Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Observation:
// If "lufthansa.buyPlane" wasn't binded, the "this" keyword in our buyPlane function would point to the "Buy New Plane" button. By using the bind method we specify WHERE the "this" keyword will take its data from.

// Partial Application of the Bind Method
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// We can now use the bind method on the above function, and preset the rate to always be a predetermined value.

// Since the first argument in our .bind() method is always the "this" keyword, but we don't have any need for it, we can set it as "null" (it could be any other value, but null is a standard) to skip it.
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23; / The above would be an equivalent to this arrow function

console.log(addVAT(100));
console.log(addVAT(23));

// CHALLENGE - Recreate the above without using .bind()

// Using Arrow Functions
const fixedRate = rate => value => value + value * rate;
const addVAT2 = fixedRate(0.23);
console.log(addVAT2(10));

// Using Regular Functions
const rateFixed = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const vatAdd2 = rateFixed(0.15);
console.log(vatAdd2(10));
*/
// ---------------------- THE BIND METHOD END -----------------------

// Coding Challenge #13

/*

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    if (typeof answer === 'number' && answer < this.answers.length) {
      this.answers[answer]++;
    } else {
      alert('Not a number between 0 and 3');
    }
    // ⬆ WITHOUT THE "ELSE" & "ALERT" ⬆
    // typeof answer === 'number' &&
    // answer < this.answers.length &&
    // this.answers[answer]++;

    this.displayResults('string');
    this.displayResults();
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(poll.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(',')}`);
    }
  },
};

// Action When Button is Clicked
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// 4. BONUS
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// Test Arrays:
// // [5, 2, 3]
// // [1, 5, 3, 9, 6, 1]

*/

// ------------ IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE) START -----------
/*
Sometime we need a function that is only executed once and never again. One thar dissapears right after it's called once.

OBS. This technique is needed for example, when working with async/await
*/

/*
// ⬇ THIS APPEARS TO BE WHAT WE WANT, BUT IT'S NOT ⬇
// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();
// ⬆ THIS APPEARS TO BE WHAT WE WANT, BUT IT'S NOT ⬆

// Here's how to execute a function immediately, without even having to save it somewhere.

// 1. Write a function expression by itself, without even assigning a variable to it.
// 2. Wrap it inside a parenthesis. By doing so we transform this function which was previously a STATEMENT, into an EXPRESSION.
// 3. Finally at the very end of the expression we invoke it. Hence the name: IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)
// 4. PAY ATTENTION TO THE PARENTHESIS!!!

(function () {
  console.log('This will never run again');
  const isPrivate = 23; // Because "isPrivate" is being called outside the function's scope
})();

console.log(isPrivate); // This console.log returns an error
//

// ARROW FUNCTION VERSION
(() => console.log('This will also NEVER run again!'))();

// Why was this pattern actually invented??
// As we know, functions create scopes. Most importantly, an outer scope does not have access to variables from an inner scope.
// For example. Our GLOBAL SCOPE, doesn't have access to variables we've created inside our functions.
// On the other hand, anything defined outside, on the GLOBAL SCOPE, can be accessed by our function.
// This being the case, we can say that any data created within a scope is "private", or "encapsulated"
// Data Encapsulation and Data Privacy are very important programming concepts.
// It's common that we may need to protect our code from other parts of our program, or external scripts and libraries.

// When we declare a block, and declare a variable inside it:
{
  const isPrivate = 23;
  var notPrivate = 45; // This variable declared with "var" on the other hand, is accessable because it ignores the block.
}
// Whatever is outside cannot access it:
console.log(notPrivate);
console.log(isPrivate);
*/

// ------------- IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE) END ------------

// ------------------------------ CLOSURES START -------------------------------
/*

// *ABOUT CLOSURES
// Closures are not a feature that we explicitly use. We don't create functions manually, as we do with a new array or function.
// Closures simply happen in certain situations. Thus we need to identify these situations

// In the example below, lets create one of those situations:
const secureBooking = function () {
  // The function is called secureBooking, because the passengerCount can't be manipulated from the outside
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

secureBooking();
booker();
booker();
booker();

// As you can observe by executing the "booker()" function more than once, the passengerCount variable's value is incremented with each iteration.  Our "booker" variable is able to hold on to data created inside of a higher-order function, and build upon it. This in essence is what a "closure" is.

// Another way of putting it would be to say that a closure makes it so that a function remembers all the variables that existed at its birth-place. In this case, 'secureBooking'.

// Now, why does this happen? The secret behind closures is this:

// Any function ALWAYS has access to the variable enviorment of the EXECUTION CONTEXT in which the function was created. Looking at our "booker()" example. booker() was created within the execution contect of secureBooking(), which in turn means that it has access to that function's variable enviroment, which in istelf contains the "passengerCount" variable. Finally, this is how booker() has access to the passengerCount variable. This connection is what we call a closure.

// Lets say that one more time.

// A function ALWAYS HAS ACCESS to the EXECUTION CONTEXT in which it was created. EVEN AFTER that execution context is gone. A CLOSURE then is basically the variable environment attached to the function exactly as it was at the time and place in which it was created.

// ++++++++++++++++++++++++++ DEFINTITIONS OF CLOSURES +++++++++++++++++++++++++
/*
DefInition #1
A closure is the closed-over VARIABLE ENVIRONMENT of the execution contect IN WHICH A FUNCTION WAS CREATED, even AFTER that execution context is gone; or in other words, even after the function to which the execution context belongs has RETURNED

⬇ less formal ⬇

Definition #2
A closure gives a function access to all the variables OF IT'S PARENT FUNCTION, even AFTER that parent function has returned. The function keep sa REFERENCE to its outer space, which PRESERVERS the scope chain throughout time.

⬇ less formal ⬇

Definition #3
A closure makes sure that a function doesn't lose connection to VARIABLES THAT EXISTED A THE FUNCTION'S BIRTHPLACE

OBSERVATION:
We do NOT manually create closures. The conditions for the existance of closures are an automatic JavaScript feature. We can't access closed-over variables explicitly. A closure is NOT a tangible JavaScript object.

In other words, it's a special behavior or feature of the JavaScript language. When certain conditions are met, a closure is formed automatically, and it allows us to access variables even after their original scope (where they were defined) has finished executing.

To summarize, closures are an automatic and useful feature of JavaScript that allow us to access variables even when they are no longer in their original scope. 

We can observe that closures have access to variables that otherwise shouldn't exist any longer, but we CANNOT directly access these variables. However, what we can do is look at this internal property in the console using "console.dir()", see the example below:
*/

// console.dir(booker);

// ------------------------------- CLOSURES END --------------------------------

// ------------------------ MORE CLOSURE EXAMPLES START ------------------------
// In the previous section we created a CLOSURE by returning a function within another function. In the examples below we will create a closure without returning a function from another function.

// Example #1

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);
// // Re-assigning f function
// h();
// f();
// console.dir(f);

// // Example #2
// const boardPassengers = function (n, wait) {
//   // const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

// ------------------------- MORE CLOSURE EXAMPLES END -------------------------

// ------------------------ SIMPLE ARRAY METHODS START -------------------------

// ------------------------- SIMPLE ARRAY METHODS END --------------------------
