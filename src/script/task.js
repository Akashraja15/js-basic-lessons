/* eslint-disable no-unused-vars */
/* eslint-disable semi */
function doSomeTask () {
  const x = 100;
  const y = 20;
  console.log('x: ' + x + ' y: ' + y);
}
doSomeTask();
console.log('completed');

function outer () {
  const outerVar = 'Hey I am the outer Var!';
  console.log(outerVar);
  function inner () {
    const innerVar = 'Hey I am an inner var!';
    console.log(innerVar);
    console.log(outerVar); // Closure - captured variable
  }
  // console.log(innerVar); // Uncaught referenceError: innerVar is not defined
  //   inner();
  return inner;
}
// outer();
// outer.inner();
const innerFunc = outer();
innerFunc();

// --------------------------------------------------------------------------------------------------
function createGreeting (greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`;
  }
}
const greet = createGreeting('Welcome!');
console.log(greet('Akash'));

const sayHello = createGreeting('Hello');
const sayVanakkam = createGreeting('Vanakkam');
console.log(sayHello('Akash Raja'));
console.log(sayVanakkam('Daniel'));
console.log(sayVanakkam('Raj'));

// ----------------------------------------------------------------------------------------

function createGame (gameName) {
  let score = 0;
  return function win () {
    score++;
    return `Your name ${gameName} score is ${score}`;
  }
}
// console.log(createGame('Akash Raja')());

const hockeyGame = createGame('Hockey');
const soccerGame = createGame('Soccer');
hockeyGame();
hockeyGame();
hockeyGame();
soccerGame();
