/* eslint-disable no-unused-vars */
/* eslint-disable semi */
function yell (name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`
}
let greetings = yell('Akash Raja') // HEY Akash
console.log(greetings);
greetings = yell() // HEY SILLY GOOSE
console.log(greetings);

function calculateBill (billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log('Running Calculate Bill!!!');
  console.log('billAmount: ' + billAmount + 'taxRate: ' + taxRate + 'tipRate: ' + tipRate)
  const total = billAmount + billAmount * taxRate + billAmount * tipRate
  return total
}
calculateBill(100)
calculateBill(100, 0.66)
calculateBill(100, undefined, 0.66)
