/* eslint-disable semi */
console.log('Hi Node!!!');
function callme () {
  const x = 100;
  const y = x * 2;
  const z = 0;
  if (x < 500) {
    console.log('x < 500');
    const z = x + y;
    console.log(`z : ${z}`);
  }
  if (y < 500) {
    console.log('y < 500')
    const v1 = z + y;
    console.log(`V1: ${v1}`);
  }
}

console.log(callme());
