/*

////////////////////////////////////
// LECTURE: Values and Variables  + let, const and var

const country = "Germany";
const continent = "Europe";
let population = 80;

console.log(country);
console.log(continent);
console.log(population);


const isIsland = false;
const language = "german";

console.log(isIsland);
console.log(language);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


////////////////////////////////////
// LECTURE: Basic Operators + Strings and Template Literals

const halfOfGermany = population/population;
console.log(halfOfGermany);
population += 1;
console.log(population);

const populationFinland = 6;

if( populationFinland > population) {
console.log("Finland have more people than Germany.")
} else {
console.log("Germany have more people than Finland.")
}

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`
console.log(description);

////////////////////////////////////
// LECTURE: Taking Decisions: if / else Statements

if(population > 33) {
  console.log(`${country} population is above average.`)
} else {
 console.log(`${country} population is below average.`)
}


////////////////////////////////////
// Coding Challenge #1 + Coding Challenge #2

const markMass = 78;
const markHeight = 1.69;
let markHigherBMI = false;
const johnMass = 92;
const johnHeight = 1.95;

function bmi(mass, height) {
let bmi = mass / (height * height);
console.log(bmi);
return bmi
}

const markBMI = bmi(markMass, markHeight);
const johnBMI = bmi(johnMass, johnHeight);

if(markBMI > johnBMI) {
  markHigherBMI = true
  console.log(`Marks BMI is ${markBMI} and its ${markHigherBMI} that its higher than Marks BMI ${johnBMI}.`)
} else {
  console.log("Johns BMI is higher than Marks.")
}


////////////////////////////////////
// Type Conversion and Coercion
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
 5 + 6 + '4' + 9 - 4 - 2;

// Solutions:
4
"617"
23
false
1143

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log( 5 + 6 + '4' + 9 - 4 - 2);

////////////////////////////////////
// LECTURE: Equality Operators: == vs. ===

const numNeighbours = Number(
prompt('How many neighbour countries does your country have?'),
);

const numNeighbours = 1;
  if(numNeighbours === 1) {
    console.log('Only 1 border!');
  } else if(numNeighbours > 1) {
    console.log('More than 1 border');
  } else {
   console.log('Noborders');
  }


////////////////////////////////////
// LECTURE: Logical Operators

const country = "usa";
const language =  "english";
const island  = false;
const population = 40;

if(language === "english" && island === false && population < 50) {
  console.log(`Yous hould live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

////////////////////////////////////
// Coding Challenge #3

const dolphinsAverageScore = (96 + 108 + 89)/3;
const koalasAverageScore = ( 88 + 91 +110)/3;

console.log(dolphinsAverageScore);
console.log(koalasAverageScore);

if(dolphinsAverageScore === koalasAverageScore  || dolphinsAverageScore < 100 && koalasAverageScore < 100) {
  console.log("Draw");
}
else if(dolphinsAverageScore > koalasAverageScore ) {
  console.log("Dolphins win.");
} else if(koalasAverageScore > dolphinsAverageScore ) {
  console.log("Koalas win.");
}

////////////////////////////////////
// LECTURE: The switch Statement

const language = "mandarin";

switch(language) {

case 'chinese':
case 'mandarin':
console.log('MOST number of native speakers!');
break;
case 'spanish':
console.log('2nd place in number of native speakers');
break;
case 'english':
console.log('3rd place');
break;
case 'hindi':
console.log('Number 4');
break;
case 'arabic':
console.log('5th most spoken language');
break;
default:
console.log('Great language too :D');
}

////////////////////////////////////
// LECTURE: The Conditional (Ternary) Operator

const countryToTest = "Portugal"
const countryPopulation = 44;

console.log(
`${countryToTest}'s population is ${countryPopulation > 33 ? 'above' : 'below'} average`,
);


////////////////////////////////////
// Coding Challenge #4

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
const finalBill = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${finalBill}`)

*/

