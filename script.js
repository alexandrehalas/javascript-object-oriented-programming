'use strict';

// CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR
/*
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
*/
// STATIC METHODS not in prototype
/*
Person.hey = function () {
  console.log('Hey there :)');
  console.log(this);
};
Person.hey();
// alexandre.hey(); // not works
*/
// PROTOTYPES
/*
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
*/
// PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS
/*
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

// commented because to much log
// const h1 = document.querySelector('h1');
// console.dir(h1);

console.dir(x => x + 1);
*/
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
/*
console.log('START - CODE CHALLENGE 1');
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

console.log('FINISH - CODE CHALLENGE 1');
*/
// CLASS EXPRESSION

//const PersonCl = class {};

// CLASS DECLARATION
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // instance methods

  // this method goes automatically to prototype and not
  // to the object
  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  hello() {
    console.log(`Hello my name is ${this.fullName}`);
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      console.log(`${name} not a full name`);
    }
  }
  get fullName() {
    return this._fullName;
  }

  // Static methods

  static hey() {
    console.log('Hey there :)');
    console.log(this);
  }
}

const afonso = new PersonCl('Afonso Zuzuzu', '1970');
console.log(afonso);
console.log(afonso.calcAge());
console.log(afonso.__proto__ === PersonCl.prototype);
afonso.hello();

// 1. Classes are not hoisted (classes cannot be used before it declared)
// 2. Classes are first-class citizes (can pass and return them from functions)
// 3. Classes are executed in strict mode

// GETTERS AND SETTERS

const account = {
  owner: 'Alexandre',
  movements: [50, 200, 100, 10],

  get latestMovement() {
    return this.movements.slice(-1).pop();
  },

  set latestMovement(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latestMovement);
console.log((account.latestMovement = 30));
console.log(account.movements);

console.log(afonso.fullName);

PersonCl.hey();
*/
// OBJECT.CREATE
/*
const PersonProto = {
  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const josiane = Object.create(PersonProto);
josiane.firstName = 'Josiane';
josiane.birthYear = '1970';
console.log(josiane);
console.log(josiane.calcAge());

const bibi = Object.create(PersonProto);
bibi.init('Bibi', '1994');
console.log(bibi);
console.log(bibi.calcAge());
*/
///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/*
console.log('START - CODE CHALLENGE 2');

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} - ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} - ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);

console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
ford.accelerate();

console.log('FINISH - CODE CHALLENGE 2');
*/

// INHERITANCE BETWEEN CLASSES USING CONSTRUCTOR FUNCTIONS
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

console.log('JUAN');
const juan = new Student('Juan', '2000', 'Computer Science');
juan.introduce();
juan.calcAge();

console.log(juan.__proto__);
console.log(juan.__proto__.__proto__);

console.log(juan instanceof Student);
console.log(juan instanceof Person);
console.log(juan instanceof Object);

console.dir(Student.prototype.constructor);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
console.log('START - CODE CHALLENGE 3');
console.log('');
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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const bmw = new Car('BMW', 120);
const tesla = new EV('Tesla', 120, 100);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();

console.log('');

console.log(tesla);
tesla.chargeBattery(90);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake();

console.log('');
console.log('FINISH - CODE CHALLENGE 3');
*/

// INHERITANCE BETWEEN "CLASSES": ES6

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
  hello() {
    console.log(`Hello my name is ${this.fullName}`);
  }
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      console.log(`${name} not a full name`);
    }
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('Hey there :)');
    console.log(this);
  }
}

class Student extends Person {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(`I'm ${new Date().getFullYear() - this.birthYear} years old`);
  }
}

const david = new Student('David Jones', '1532', 'Piracy');
david.introduce();
david.calcAge();

console.log(david);
