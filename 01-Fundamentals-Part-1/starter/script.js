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

*/

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


