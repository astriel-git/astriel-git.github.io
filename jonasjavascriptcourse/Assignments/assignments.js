/* JavaScript Fundamentals - Part 1

// #1 - Values and Variables
let country = "Brazil"
let continent = "South America"
let population = 300000000

console.log(country);
console.log(continent);
console.log(population);


// #2 - Data Types
let isIsland = false;
let language;
console.log(language);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var
language = "Portuguese";
console.log(language);

// #3 - Basic Operators
console.log(population / 2);

population++;
console.log(population);

const populationFinland = 6000000;
console.log(population >= populationFinland);
console.log(population >= 33000000);

let description = "Brazil is in South America, and its 300 million people speak Portuguese"
console.log(description)

//Coding Challeng #1

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;


const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;


const bmiMark = markMass / markHeight ** 2;
const bmiJohn = johnMass / johnHeight ** 2;
const markHigherBMI = bmiMark > bmiJohn;

console.log(markHigherBMI)
console.log(bmiMark, bmiJohn);

// #4 - Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} people speak ${language}`
console.log(description);

// Taking Decisions: if / else Statements
let statement;
if (population >= 33000000) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33000000 - population} below average.`)
};

// Coding Challenge #2
if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's! (${bmiMark})`)
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's! (${bmiMark})`)
}

//  #5 - Type Conversion and Coercion
const firstTest = '9' - '5'; // 4
const secondTest = '19' - '13' + '17'; //617
const thirdTest = '19' - '13' + 17; // 23
const fourthTest = '123' < 57; // false
const fifthTest = 5 + 6 + '4' + 9 - 4 - 2; //1143

console.log(firstTest, secondTest, thirdTest, fourthTest, fifthTest);

// #6 - Equality Operators: == vs. ===
// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"))

// if (numNeighbours === 1) {
//     console.log("Only 1 border!")
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border")
// } else {
//     console.log("No borders")
// }

// #7 - Logical Operators
if (language === "Portuguese" && population === 300000001 && !isIsland) {
    console.log("You should live in Brazil :)")
} else {
    console.log("Brazil does not meet your criteria :(")
}

// Coding Challenge #3

const dolphinsScoreOne = 96;
const dolphinsScoreTwo = 108;
const dolphinsScoreThree = 89;
const koalasScoreOne = 88;
const koalasScoreTwo = 91;
const koalasScoreThree = 110;

const dolphinsAverage = (dolphinsScoreOne + dolphinsScoreTwo + dolphinsScoreThree / 2);
const koalasAverage = (koalasScoreOne + koalasScoreTwo + koalasScoreThree / 2);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log("Dolphins WIN!!")
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
    console.log("Koalas WIN!!")
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log("It's a DRAW!!")
} else {
    console.log("EVERYONE LOSES!!")
}


// #8 - The switch Statment
const myLanguage = "Chinese"

switch (myLanguage) {
    case "Chinese":
    case "Mandarin":
        console.log("MOST number of native speakers");
        break;
    case "Spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "English":
        console.log("3rd place");
        break;
    case "Hindi":
        console.log("Number 4");
        break;
    case "Arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}

// # 9 - The Conditional (Ternary) Operator
population > 33000000 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);

// Coding Challenge #4

//My solution:
// const bill = 430;
// const tipTwenty = bill * 20 / 100;
// const tipFifteen = bill * 15 / 100;

// bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill}, the tip was ${tipFifteen} and the total value of is ${bill + tipFifteen}`) : console.log(`The bill was ${bill}, the tip was ${tipTwenty} and the total value of is ${bill + tipTwenty}`)

//Teacher's Solution:
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value of is ${bill + tip}`);

*/

// JavaScript Fundamentals - Part 2

// #10 - Functions

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }

// const finland = describeCountry('Finland', 6, 'Helsinki');
// const brazil = describeCountry('Brazil', 210, 'Brasilia');
// const usa = describeCountry('USA', 330, 'Washington');
// console.log(finland);
// console.log(brazil);
// console.log(usa);

// #11 - Function Declarations vs. Expressions

// MY SOLUTION

// Declaration
// const percentageOfWorld1 = function (population) {
//     return (population / 7900000000 * 100).toFixed(2);
// }

// const china = percentageOfWorld1(1);
// console.log(`The population of China representes ${china}% of the total world population`);

// Expression
// function percentageOfWorld2(population) {
//     return (population / 7900000000 * 100)
// }

// const tits = percentageOfWorld2(1400000000).toFixed(2);
// console.log(`The population of China representes ${tits}% of the total world population`);

// TEACHER'S SOLUTION

// Expression
// const percentageOfWorld1 = function (population) {
//     return (population / 7900000000 * 100);
// }

// //Declaration
// function percentageOfWorld1(population) {
//     return (population / 7900000000 * 100)
// };

// const percPortugal1 = percentageOfWorld1(10000000);
// const percChina1 = percentageOfWorld1(1400000000);
// const percUSA1 = percentageOfWorld1(332000000);
// console.log(percPortugal1, percChina1, percUSA1);

// #12 - Arrow Functions

// const percentageOfWorld1 = population => population / 7900000000 * 100;

// const percPortugal1 = percentageOfWorld1(10000000).toFixed(2);
// const percChina1 = percentageOfWorld1(1400000000).toFixed(2);
// const percUSA1 = percentageOfWorld1(332000000).toFixed(2);

// console.log(`Your country representes ${percPortugal1}% of the total world population`);
// console.log(`Your country representes ${percChina1}% of the total world population`);
// console.log(`Your country representes ${percUSA1}% of the total world population`);

// #13 - Functions Calling Other Functions

// // ANSWER USING EXPRESSIVE FUNCTIONS

// // The "percentageOfWorld" function calculates the % of a population related to the total world population


// function percentageOfWorld(population) {
//     return (population / 7900000000 * 100)
// };

// // The "describePopulation" function prints out a string with the namme of the provided country, it's current population number, and the result from the above function.

// function describePopulation(country, population) {

//     const countryPercentage = percentageOfWorld(population).toFixed(2);

//     return `${country} has ${population} people which accounts for ${countryPercentage}% of the world's population.`
// }

// //Result by assigning to a variable:
// const brazil = describePopulation("Brazil", 7900000000);
// console.log(brazil);

// //Direct result, no variable assignment:
// console.log(describePopulation("China", 1400000000))

// ANSWER USING DECLARATIVE FUNCTIONS
// const percentageOfWorld = function (population) {
//     return (population / 7900000000 * 100);
// }

// const describePopulation = function (country, population) {
//     const countryPercentage = percentageOfWorld(population).toFixed(2);

//     return `${country} has ${population} people which accounts for ${countryPercentage}% of the world's population.`
// }

// console.log(describePopulation("China", 1400000000))

// ANSWER USING ARROW FUNCTIONS
// const percentageOfWorld = population => (population / 7900000000 * 100);

// const describePopulation = (country, population) => {
//     const countryPercentage = percentageOfWorld(population);

//     return `${country} has ${population} people which accounts for ${countryPercentage}% of the world's population.`;
// }

// console.log(describePopulation("Brazil", 7900000000))

// Coding Challenge #4



// This function sums 3 scores and divides them by 3 to get the average;
// const calcAverage = (scoreA, scoreB, scoreC) => ((scoreA + scoreB + scoreC) / 3);

// // These variables use the "calcAverage" function to find the average score for each team;

// const checkWinner = (avgDolphins, avgKoalas) => {
//     avgDolphins = calcAverage(85, 54, 41);
//     avgKoalas = calcAverage(23, 34, 27);

//     if (avgKoalas >= 2 * avgDolphins) {
//         return `Koalas win! (${avgKoalas} vs. ${avgDolphins})`;
//     } else if (avgDolphins >= 2 * avgKoalas) {
//         return `Dolphins win! (${avgDolphins} vs. ${avgKoalas})`;
//     } else {
//         return `No Winners, Only Losers!`;
//     }
// }

// console.log(checkWinner())

// TEACHER'S SOLUTION

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// Test 2
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(653, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins Win (${avgDolphins} vs. ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas Win (${avgKoalas} vs. ${avgDolphins})`)
//     } else {
//         console.log(`Everyone LOSES!`)
//     }

// }
// checkWinner(scoreDolphins, scoreKoalas);

// #14 - Introduction to Arrays

// const populations = [1000000, 10000000, 100000000, 1000000000]
// console.log(populations.length === 4);

// const percentages = ["0.01%", "0.13%", "1.27%", "12.66%"];
// console.log(percentages);

// #15 - Basic Array Operations (Methods)

// const neighbours = ["Argentina", "Paraguay", "Uruguay", "Equator"];
// console.log(neighbours);

// neighbours.push("Utopia");
// console.log(neighbours);

// neighbours.pop("Utopia");
// console.log(neighbours);

// if (neighbours.includes("Germany")) {
//     console.log("This country is probably in Eastern Europe.");
// } else {
//     console.log("Probably not an Eastern European country.");
// }

// neighbours[3] = "Chile";
// console.log(neighbours);

// Coding Challenge #5

// //MY SOLUTION
// const calcTip = function (bill) {

//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.20;
//     }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(bills, tips, totals);

// console.log(tips)

// TEACHER'S SOLUTION

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(bills, tips, totals);


// console.log(tips)

// #16 - Introduction to Objects

// const myCountry = {
//     country: "Brazil",
//     capital: "Brazilia",
//     language: "Portuguese",
//     population: 170000000,
//     neighbours: ["Paraguay", "Argentina", "Chile", "Peru"],

// }

// console.log(myCountry);

// #17 - Dot vs. Bracket Notation

// const myCountry = {
//     country: "Brazil",
//     capital: "Brazilia",
//     language: "Portuguese",
//     population: 170000000,
//     neighbours: ["Paraguay", "Argentina", "Chile", "Peru"],

// }

// console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and capital called ${myCountry.capital}.`)

// myCountry.population = myCountry.population + 30000000;

// console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and capital called ${myCountry.capital}.`)

// myCountry["population"] = myCountry["population"] - 30000000;

// console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and capital called ${myCountry.capital}.`)

// #18 - Object Methods

// const myCountry = {
//     country: "Brazil",
//     capital: "Brazilia",
//     language: "Portuguese",
//     population: 170000000,
//     neighbours: ["Paraguay", "Argentina", "Chile", "Peru"],
//     describe: function() {
//        return console.log(`${this.country} has ${this.population} ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and capital called ${this.capital}.`)
//     },
//     checkIsland: function() {
//         return this.isIsland = this.neighbours.length === 0 ? true : false;
//     }

// }

// console.log(myCountry)
// console.log(myCountry.checkIsland())

// Coding Challenge #6

// MY SOLUTION
// const mark = {
//     firstName : "Mark",
//     lastName : "Miller",
//     weight : "78",
//     height : "1.68",
//     calcBMI : function (){
//         this.bmi = this.weight / (this.height ** 2);
//         return this.bmi;
//     },
    
// }

// const john = {
//     firstName : "John",
//     lastName : "Smith",
//     weight : "92",
//     height : "1.95",
//     calcBMI : function (){
//         this.bmi = this.weight / (this.height ** 2);
//         return this.bmi;
//     },

    
// }

// mark.calcBMI() < john.calcBMI() ? console.log(`${john.firstName}'s BMI ${john.bmi.toFixed(2)} is higher than ${mark.firstName} ${mark.bmi.toFixed(2)}`) : console.log(`${mark.firstName}'s BMI ${mark.bmi.toFixed(2)} is higher than ${john.firstName}'s ${john.bmi.toFixed(2)}`) ;

// TEACHER'S SOLUTION

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// } else if (mark.bmi < john.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }

// #19 - Iteration: The for Loop

// for (let i = 1; i < 51; i++) {
//     console.log(`Voter number ${i} is currently voting`);
// }

// #20 - Looping Arrays, Breaking and Continuing

// const populations = [4000000000, 1440000001, 330000000, 83000000];
// const percentages2 = [];
// const percentageOfWorld1 = population => population / 7900000000 * 100;

// for (let i = 0; i < populations.length; i++){
//     const perc = percentageOfWorld1(populations[i]).toFixed(2);
//     percentages2.push(perc);
//     console.log(`The result for population ${i+1} is: ${percentages2[i]}%`);
// }

// #21 - Looping Backwards and Loops in Loops

// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//   }
// }

// #22 - The While Loop

// const populations = [4000000000, 1440000001, 330000000, 83000000];
// const percentages3 = [];
// const percentageOfWorld1 = population => population / 7900000000 * 100;

// let i = 0;
// while (i != populations.length){
//     const perc = percentageOfWorld1(populations[i]).toFixed(2);
//     percentages3.push(perc);
//     console.log(`The result for population ${i+1} is: ${percentages3[i]}%`)
//     i++
//     ;
// }

// Coding Challenge #7

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 
// }

// for (i = 0; tips.length < bills.length; i++){
//     tips.push(calcTip(bills[i]));
//     totals.push((bills[i] + tips[i]));
// }

// const calcAverage = function(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// const average = calcAverage(totals);
// console.log(average);
// console.log(tips);
// console.log(totals);