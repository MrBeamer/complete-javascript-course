'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const michael = new Person('Michael', 1991);
const kim = new Person('Kim', 1992);
const franzi = new Person('Franzi', 1994);
console.log(michael, kim, franzi);

// 1. new {} object is created
// 2. function is called, this = {} object
// 3. {} object is linked to prototype
// 4. function automatically return {} object

//Prototype

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Person.prototype.species = 'Homo Sapiens';

michael.calcAge();
kim.calcAge();
console.log(michael.species);
kim.species;
