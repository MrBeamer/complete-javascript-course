'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// const michael = new Person('Michael', 1991);
// const kim = new Person('Kim', 1992);
// const franzi = new Person('Franzi', 1994);
// console.log(michael, kim, franzi);

// // 1. new {} object is created
// // 2. function is called, this = {} object
// // 3. {} object is linked to prototype
// // 4. function automatically return {} object

// //Prototype

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// Person.prototype.species = 'Homo Sapiens';

// michael.calcAge();
// kim.calcAge();
// console.log(michael.species);
// kim.species;

//Coding challenge 1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   console.log(`${this.make} going at ${(this.speed += 10)} km/h`);
// };

// Car.prototype.brake = function () {
//   console.log(`${this.make} going at ${(this.speed -= 5)} km/h`);
//   console.log(this.make);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// console.log(bmw, mercedes);
// bmw.accelerate();
// bmw.brake();
// mercedes.accelerate();
// console.log(Car.prototype);

// ES6 classes

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   //Prototype area, not in the object gets inherited
//   // Instance methods
//   accelerate() {
//     console.log(`${this.make} going at ${(this.speed += 10)} km/h`);
//   }

//   brake() {
//     console.log(`${this.make} going at ${(this.speed -= 5)} km/h`);
//   }

//   get acceleration() {
//     return `${this.make} going at ${(this.speed += 10)} km/h`;
//   }

//   //Class methods
//   static faster() {
//     console.log('Burn the rubber baby, lets fucking go 🏎');
//     console.log(this);
//   }
// }

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// console.log(bmw, mercedes);
// bmw.accelerate();
// bmw.brake();
// console.log(bmw.acceleration);
// Car.faster();

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

// const steven = Object.create(PersonProto);

// Coding challenge 2

// class CarCL {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     console.log(`${this.make} going at ${(this.speed += 10)} km/h`);
//   }

//   brake() {
//     console.log(`${this.make} going at ${(this.speed -= 5)} km/h`);
//   }

//   get speedUs() {
//     return this.speed / 1.6;
//   }

//   set speedUs(speed) {
//     this._speed = speed * 1.6;
//   }
// }

// const ford = new CarCL('Ford', 120);
// console.log(ford.speedUs);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUs = 10;
// console.log(ford);

// //Parent
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// // Child
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Create connection between parent and child

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const felix = new Student('Felix', 1990, 'Economics');

// felix.introduce();
// felix.calcAge();

// Coding Challenge #3

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   console.log(`${this.make} going at ${(this.speed += 10)} km/h`);
// };

// Car.prototype.brake = function () {
//   console.log(`${this.make} going at ${(this.speed -= 5)} km/h`);
// };

// const Ev = function (make, speed, batteryCharge) {
//   Car.call(this, make, speed);
//   this.batteryCharge = batteryCharge;
// };

// Ev.prototype = Object.create(Car.prototype);

// Ev.prototype.chargeBattery = function (chargeTo) {
//   this.batteryCharge = chargeTo;
// };

// Ev.prototype.accelerate = function () {
//   console.log(
//     `${
//       this.make
//     } going at ${(this.speed += 20)}km/h, with a charge of ${(this.batteryCharge -= 1)}%`
//   );
// };

// //Linking parent with child prototype

// const tesla = new Ev('Tesla', 120, 23);
// tesla.chargeBattery = 23;
// console.log(tesla.batteryCharge);
// tesla.accelerate();
// tesla.brake();

// const ferrari = new Car('Ferrari', 120);
// ferrari.accelerate();
// ferrari.brake();
// console.dir(Ev);

// Class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always need to be first
//     super(fullName, birthYear); // is calling the constructor function of the parent
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   calcAge() {
//     const today = new Date();
//     const currentYear = today.getFullYear();
//     console.log(currentYear - this.birthYear);
//   }
// }

// const michael = new StudentCl('Michael Beamer', 1991, 'English');
// michael.introduce();
// michael.calcAge();

// class Account {
//   // Public field (on instances)
//   locale = navigator.language;

//   // Private fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // this.#movements = [];
//     // this.locale = navigator.language;
//     console.log(`Thanks ${this.owner} for opening an account.`);
//   }

//   // public interface
//   getMovements() {
//     return this.movements;
//   }
//   deposit(amount) {
//     this.#movements.push(amount);
//   }
//   withdrawal(amount) {
//     this.#movements.push(-amount);
//   }

//   balance() {
//     const balance = this.#movements.reduce((value, sum) => value + sum, 0);
//     console.log(balance);
//   }
// }

// const acc1 = new Account('Michael', 'EUR', 1234);
// const acc2 = new Account('Kim', 'USD', 4321);
// acc1.deposit(1000);
// acc1.withdrawal(500);
// acc2.deposit(2000);
// acc2.withdrawal(1000);
// acc1.balance();
// acc2.balance();

// console.log(acc1.locale);

// Code challenge 4

// Parent class
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(`${this.make} going at ${(this.speed += 10)} km/h`);
    return this;
  }

  brake() {
    console.log(`${this.make} going at ${(this.speed -= 5)} km/h`);
    return this;
  }
  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this._speed = speed * 1.6;
  }
}

// Child class inheritance from Car
class EvCl extends CarCl {
  //Private fields
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }

  accelerate() {
    console.log(
      `${
        this.make
      } going at ${(this.speed += 20)}km/h, with a charge of ${(this.#charge -= 1)}%`
    );
    return this;
  }
}

const rivian = new EvCl('Rivian', 120, 23);
// rivian.chargeBattery(100);
rivian.accelerate().accelerate().accelerate().brake();
