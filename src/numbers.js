/* eslint-disable quotes */
/* eslint-disable semi */
const age = 100;
const money = 1000.50;
console.log(typeof age);
console.log(typeof money);

// --------------------------------------------

console.log("10" + "10");
console.log("10" * "10");
console.log("10" - "10");
console.log("10" / "10");
// the above works with multiplication, division, and substraction
// but not with addition
// because the "+" sign is also used for "conctenation"

// ---------------------------------------------

// Math helper methods:
console.log(Math.round(2.2));
console.log(Math.floor(2.6));
console.log(Math.ceil(2.4));
console.log(Math.random());

const sweets = 20;
const kids = 3;
const eachKidGets = Math.floor(sweets / kids);
console.log(eachKidGets);
const leftsweets = sweets % kids;
console.log(leftsweets);

// ------------------------------------------

let x = 2 ** 3;
console.log(x);
x = Math.pow(2, 3);
console.log(x);

// ---------------------------------------

console.log(0.1 + 0.2);
// let costOfProduct = 100.95;
// const costOfProduct = 10095; // in paise

// --------------------------------------

console.log(typeof Infinity);
console.log(typeof -Infinity);

// const result = 10 / 'hello';
console.log(typeof NaN);
