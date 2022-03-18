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
    console.log(outerVar);
  }
  // console.log(innerVar); // Uncaught referenceError: innerVar is not defined
  return inner;
}
outer();
