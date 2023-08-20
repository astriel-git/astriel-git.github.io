// ----------------------------------CODE WARS----------------------------------

// -------------------------------- EXERCISE #1 --------------------------------

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// const arr = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// const testString = "The quick brown fox jumps over the lazy dog";
// const sentence = "The quick brown fox jumps over the lazy dog";
// const sentence2 = "Pack my box with five dozen liquor jugs";
// const sentence3 = "Hello, world!";

// const isPangram = (str) =>
//   arr.every(function (x) {
//     return str.toLowerCase().includes(x);
//   });

// console.log(isPangram(sentence)); // Output: true
// console.log(isPangram(sentence2)); // Output: true
// console.log(isPangram(sentence3)); // Output: false

// -------------------------------- EXERCISE #2 --------------------------------

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// function openOrSenior(data) {
//   const output = [];

//   for (let i = 0; i < data.length; i++) {
//     const age = data[i][0];
//     const handicap = data[i][1];

//     if (age >= 55 && handicap > 7) {
//       output.push("Senior");
//     } else {
//       output.push("Open");
//     }
//   }

//   return output;
// }

// -------------------------------- EXERCISE #3 --------------------------------

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// const printerError = function (controlString) {
//   const errorCount = controlString
//     .split("")
//     .filter((char) => char > "m").length;
//   const totalLength = controlString.length;

//   return `${errorCount}/${totalLength}`;
// };

// -------------------------------- EXERCISE #4 --------------------------------

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// const paperwork = function (n, m) {
//   if (n > 0 && m > 0) {
//     return n * m;
//   } else {
//     return 0;
//   }
// };

// console.log(paperwork(5, 5));

// -------------------------------- EXERCISE #5 --------------------------------
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output
// The middle character(s) of the word represented as a string.

// function getMiddle(s) {
//   s.split("");
//   const x = Math.round((s.length + 0) / 2);

//   if (s.length % 2 === 0) {
//     return s[x - 1] + s[x];
//   } else if (x.length % 2 !== 0) {
//     return s[x - 1];
//   }
// }
// console.log(getMiddle("TEST12TEST"));

// -------------------------------- EXERCISE #6 --------------------------------
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// *How to determine if a word has no duplicate characters?

// _______________________________________________________________
/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

const generateHashtag = function (sentence) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const transformIntoArray = sentence.split(" ").map(capitalize).join("");

  const finished = "#" + capitalize(transformIntoArray);
  return finished.length <= 140 && finished.length > 1 ? finished : false;
};

console.log(generateHashtag("Hello there thanks for trying my Kata"));
