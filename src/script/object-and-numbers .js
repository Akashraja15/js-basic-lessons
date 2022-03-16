/* eslint-disable no-new-object */
/* eslint-disable no-array-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
const person = {
  first: 'Akash',
  last: 'Raja',
  age: 21
};
console.log(person.first);
console.log(person.last);
console.log(person.age);
person.first = 'Tom';
person.last = 'Jerry';
console.log(person.first);
console.log(person.last);
person.last = null;
console.log(person.last);

// -----------------------------------------------------

const o = new Object();
const a = new Array();
const d = new Date();
const f1 = function () {
  console.log('The cow jumped over the Moon');
};
console.log('Date = ' + d);
f1();

// ------------------------------------------

// Check the datatype of a value
const x = 100;
let result = Number.isInteger(x);
console.log(`Is x a number: ${result}`);
const y = 'abcd';
result = Number.isInteger(y);
console.log(`Is y a number: ${result}`);
result = (typeof y === 'string');
console.log(`Is y a string: ${result}`);
const flag = true;
result = (typeof flag === 'boolean');
console.log(`Is flag a boolean: ${result}`);
const nos = [1, 2, 3, 4, 5]; // An Array is a object
result = (typeof nos === 'object');
console.log(`Is x a object: ${result}`)
