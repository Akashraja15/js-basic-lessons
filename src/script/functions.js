/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */

// const doc = doctorize('Akash');
// console.log(doc);
// function doctorize (firstname) {
//   return `Dr. ${firstname}`
// }

// Anon Function
// function (firstname) {
//     return `Dr. ${firstname}`
// }

// Function Expression
// const doctorize = function (firstname) {
//   return `Dr. ${firstname}`
// }




// Arrow Functions
// const inchToCM = inches => {
//   console.log(inches);
//   return inches * 2.54;
// };
// const resultcm = inchToCM(10)
// console.log(resultcm);


// const funcA = () => {
//   console.log('Hi');
// };
// funcA();

// const add = (a, b = 3) => a + b;
// const inTocm = (inches) => inches * 2.54;
// console.log(add(100));
// console.log(inTocm(25));





// Arrow functions next example
const makePerson = (first, last) => ({ name: `${first} ${last}`, age: 0 });
const person = makePerson('Akash', 'Raja');
console.log(person); // return an object

(function (age) {
  console.log(`you are cool and your age is ${age}`);
})(21); // Immediately invoked function expression
