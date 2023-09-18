'use strict';

// CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // instance methods
  // dont do this
  //   this.calcAge = function () {
  //     return new Date().getFullYear() - this.birthYear;
  //   };
};

// 1. New {} object was created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}
const alexandre = new Person('Alexandre', '1990');
const elizabete = new Person('Elizabete', '1986');
const gabriel = new Person('Gabriel', '2013');

console.log(alexandre);
console.log(elizabete);
console.log(gabriel);

console.log(alexandre instanceof Person);

const giulia = { firstName: 'giulia', birthYear: '2000' };
console.log(giulia instanceof Person);

// PROTOTYPES
Person.prototype.calcAge = function () {
  return new Date().getFullYear() - this.birthYear;
};
console.log(Person.prototype);

console.log(alexandre.calcAge());
console.log(elizabete.calcAge());
console.log(gabriel.calcAge());

console.log(alexandre.__proto__);
console.log(alexandre.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(alexandre));
console.log(Person.prototype.isPrototypeOf(elizabete));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';

console.log(alexandre);
console.log(alexandre.species);

console.log(alexandre.hasOwnProperty('firstName'));
console.log(alexandre.hasOwnProperty('species'));

// PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS
console.log(alexandre.__proto__);
console.log(alexandre.__proto__.__proto__);
console.log(alexandre.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5, 1, 2, 6, 3, 4, 5, 6, 7];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} - ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} - ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();

mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.accelerate();
