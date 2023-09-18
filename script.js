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
