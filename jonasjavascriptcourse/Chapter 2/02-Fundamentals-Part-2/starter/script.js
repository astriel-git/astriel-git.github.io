'use strict';
/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;





function logger() {
    console.log("My name is Jonas");
}

// "calling" / "running" / "invoking" a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

*/




// Function Declaration
// function calcAge1(birthYear) {
//     return 2023 - birthYear;
// }
// const age1 = calcAge1(1994);
// console.log(age1);


// Function Expression
// const calcAge2 = function (birthYear) {
//     return 2023 - birthYear;
// }
// const age2 = calcAge2(1994);
// console.log(age2);


// Arrow Function
// const calcAge3 = birthYear => 2023 - birthYear;
// const age3 = calcAge3(1994);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     // return retirement
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1994, "Lucas"))
// console.log(yearsUntilRetirement(1980, "Bob"))


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apple slices and ${orangePieces} orange slices.`;
//     return juice;
// }

// fruitProcessor(2, 3);
// console.log(fruitProcessor(2, 3));


// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} is already retired`);
//         return -1;
//     }
//     // return
// }

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

