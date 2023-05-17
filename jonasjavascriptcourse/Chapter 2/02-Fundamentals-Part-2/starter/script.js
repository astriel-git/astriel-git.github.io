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

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ['Michael', 'Steven', 'Peter']
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Jonas"
// const lucas = [firstName, "Patricio", 2037 - 1991, "teacher", friends];
// console.log(lucas.length);


// // Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
// console.log(ages);

// const friends = ["Michael", "Steven", "Peter"];

// // Add Elements
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// // Remove Elements
// friends.pop(); //Remove last
// const popped = friends.pop(); //Remove last
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));
// console.log(friends.includes("23"));

// if (friends.includes("Steven")) {
//     console.log("You have a friend called Steven");
// }

// const lucasArray = [
//     "Lucas",
//     "Patricio",
//     2023 - 1994,
//     "barber",
//     ["Michael", "Peter", "Steven"]
// ];

// const lucas = {
//     firstName: "Lucas",
//     lastName: "Patricio",
//     birthYear: 1994,
//     job: "barber",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriversLicence: false,
//     // calcAge: function(birthYear) { 
//     //     return 2023 - birthYear;
//     // }
//     calcAge: function () {
//         this.age = 2023 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()} year old ${lucas.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence.`
//     }
// };

// console.log(lucas.calcAge());

// console.log(lucas.age);
// console.log(lucas.age);
// console.log(lucas.age);

// console.log(lucas.getSummary());



// for loop keeps running while condition is TRUE
// for(let rep = 1; rep <= 10; rep++ ){
//     console.log(`Lifting weights repetition ${rep} 🏋🏻`)
// }


// const jonas = [
//     "Jonas",
//     "Shchmedtmann",
//     2037 - 1991,
//     "teacher",
//     ["Michael", "Peter", "Steven"],
//     true
// ];

// const types = [];

// for (let i = 0; i < jonas.length ;i++){
//     // Reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);

//     //Filling types array
//     //types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++){
//     ages.push(2023 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log("---Only String---")
// for (let i = 0; i < jonas.length ;i++){
//     if(typeof jonas[i] !== "string") continue;

//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log("---Break With Number---")
// for (let i = 0; i < jonas.length ;i++){
//     if(typeof jonas[i] === "number") break;

//     console.log(jonas[i], typeof jonas[i]);
// }


// const jonas = [
//     "Jonas",
//     "Shchmedtmann",
//     2037 - 1991,
//     "teacher",
//     ["Michael", "Peter", "Steven"],
//     true
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`----STARTING EXERCISE ${exercise}----`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋🏻‍♀️`);
//     }
// }

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repetition ${rep} 🏋🏻‍♀️`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weight repetition ${rep} 🏋🏻‍♀️`);
//     rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice != 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log("You got a 6")
// }