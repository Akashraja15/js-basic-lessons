/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable block-spacing */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-new-object */
const cody = new Object()
cody.living = true
cody.age = 33
cody.gender = 'male'
cody.getGender = function () { return cody.gender }
console.log(cody.getGender())

// -------------------------------------------------------------

const myObject = new Object()
myObject['0'] = 'f'
myObject['1'] = 'o'
myObject['2'] = 'o'
console.log(myObject)

const myString1 = new String('foo')
console.log(myString1)

//---------------------------------------------

const Person = function(living, age, gender) {
    this.living = living
    this.age = age
    this.gender = gender
    this.getGender = function () { return this.gender};
};
const smith = new Person(true, 33, 'male');
console.log(smith);

//-----------------------------------------------------------

// const myNumber = new Number(23);
// const myString = new String('male');
// const myBoolean = new Boolean(false);
// const myObject = new Object();
// const myArray = new Array('foo','bar');
// const myFunction = new Function("x","y","return x*y");
// const myDate = new Date();
// const myRegExp = new RegExp('\bt[a-z]+\b');
// const myError = new Error ('Sorry!');
// console.log(myNumber.constructor);
// console.log(myString.constructor);
// console.log(myBoolean.constructor);
// console.log(myObject.constructor);
// console.log(myArray.constructor);
// console.log(myFunction.constructor);
// console.log(myDate.constructor);
// console.log(myRegExp.constructor);
// console.log(myError.constructor);