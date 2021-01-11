'use strict';

/*
///////////////////////////////////////
// LECTURE: Functions

function describeCountry (country, population, capitalCity) {
  console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
}

describeCountry("Italy", 40, "Rome");
describeCountry("Germany", 80, "Berlin");
describeCountry("Sweden", 50, "Stockholm");

///////////////////////////////////////
// LECTURE: Function Declarations vs. Expressions vs. Arrow Functions

function percentageOfWorld1 (country, population) {
  const percentageOfWorldPopulation = (population/7900)*100;
  return `${country} has ${population} million people, so it's about ${percentageOfWorldPopulation}of the world population`;
}

const germany = percentageOfWorld1("Germany", 83);
const italy = percentageOfWorld1("Italy", 10);
const sweden = percentageOfWorld1("Sweden", 60);

console.log(germany);
console.log(italy);
console.log(sweden);

const percentageOfWorld2 = function (country, population) {
  const percentageOfWorldPopulation = (population/7900)*100;
  return `${country} has ${population} million people, so it's about ${percentageOfWorldPopulation}of the world population`;
}

const germany2 = percentageOfWorld2("Germany", 83);
const italy2 = percentageOfWorld2("Italy", 10);
const sweden2 = percentageOfWorld2("Sweden", 60);

console.log(germany2);
console.log(italy2);
console.log(sweden2);


const percentageOfWorld3 =  (country, population) => {
  const percentageOfWorldPopulation = (population/7900)*100;
  return `${country} has ${population} million people, so it's about ${percentageOfWorldPopulation}of the world population`;
}

const germany3 = percentageOfWorld3("Germany", 83);
const italy3 = percentageOfWorld3("Italy", 10);
const sweden3 = percentageOfWorld3("Sweden", 60);

console.log(germany3);
console.log(italy3);
console.log(sweden3);

///////////////////////////////////////
// LECTURE: Function Declarations vs. Expressions vs. Arrow Functions
function percentageOfWorld4 (population) {
 return (population/7900)*100;
}

function describePopulation (population, country) {
 const percentageOfWorldPopulation2  = percentageOfWorld4(population);
  return `${country} has ${population} million people, so it's about ${percentageOfWorldPopulation2}of the world population`;
}


console.log(describePopulation(80, "Germany"));

///////////////////////////////////////
// Coding Challenge #1

function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3)/3;
}

let avgDolhins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolhins, avgKoalas) {
  if(avgDolhins >= avgKoalas*2){
    console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
  } else if(avgKoalas >= avgDolhins*2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log("Its a draw.";
  }
}

// Test 1
checkWinner(avgDolhins,avgKoalas);

// Test 2
avgDolhins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolhins,avgKoalas);

///////////////////////////////////////
// LECTURE: Introduction to Arrays


const populations = [83, 10, 60, 10]
  if(populations.length === 4) {
    console.log(true);
  } else {
    console.log(false);
  }

function percentageOfWorld5 (population) {
  return population.map( population => (population/7900)*100);
}

console.log(percentageOfWorld5(populations));


///////////////////////////////////////
// LECTURE: Introduction to Arrays

const neighbours = ["Netherlands", "Belgium", "Sweden"];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if(!neighbours.includes("Germany")) {
console.log('Probably not a central European country :D');
}

console.log(neighbours.indexOf('Sweden'));
neighbours[2] = 'Republic of Sweden';
console.log(neighbours);


///////////////////////////////////////
// Coding Challenge #2

const bills = [125, 555, 44];

function calcTip(bills) {
  const tips = [];
  bills.map( bill => {
 if(bill >= 50 && bill <= 300 ) {
    let tip = bill*0.15
    return tips.push(tip);
  } else {
    let tip = bill*0.20
    return tips.push(tip);
  }
})
console.log(`This is the tips array ${tips}`)
const total1 = tips[0] + bills[0];
const total2 = tips[1] + bills[1];
const total3 = tips[2] + bills[2];
console.log(`The total of bill 1 is: ${total1} EUR.`);
console.log(`The total of bill 2 is: ${total2} EUR.`);
console.log(`The total of bill 3 is: ${total3} EUR.`);
}

calcTip(bills);


///////////////////////////////////////
// LECTURE: Introduction to Objects +  Dot vs. Bracket Notation + LECTURE: Object Methods

const myCountry = {
  country: "Germany",
  capital: "Berlin",
  language: "german",
  population: 83,
  neighbours: ["Netherlands", "Belgium", "Sweden"],
  describe(){
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
  }
}

myCountry.population += 2;

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

myCountry["population"] -= 2;

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

myCountry.describe();

///////////////////////////////////////
// Coding Challenge #3


const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI() {
    this.BMI = Math.round(this.mass/(this.height * this.height));
    return this.BMI;
  }
}

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI() {
    this.BMI = Math.round(this.mass/(this.height * this.height));
    return this.BMI;
  }
}

mark.calcBMI()
john.calcBMI()

if(mark.BMI > john.BMI) {
  console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName} (${john.BMI})!`)
} else {
  console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName} (${mark.BMI})!`)
}

*/
