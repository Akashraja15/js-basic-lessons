/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */


// *** METHODS ***
// A Function which lives inside an object.
const employee = {
  name: 'Akash Raja',
  // method
  sayHi: function () {
    console.log(`Hi!! ${this.name}`);
    return `Hi ${this.name}`;
  },
  print: () => {
    console.log('Hello employee');
  },
  // Short Hand Method
  yellHi () {
    console.log(`HI ${this.name.toUpperCase()}`);
  }
};
employee.sayHi();
employee.print();
employee.yellHi();
