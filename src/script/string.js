/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
const my_name = 'AkashRaja'
const middle = 'Gabbbar'
const last = 'singh'

console.log(my_name)
console.log(middle)
console.log(last)

// --------------------------------------------

const sentence1 = 'shes\'s so cool'
console.log(sentence1)

const sentence2 = "shes's so cool"
console.log(sentence2)

const sentence3 = 'shes\'s so "cool"'
console.log(sentence3)

const sentence4 = "shes's so \"cool\""
console.log(sentence4)

const sentence5 = 'shes\'s so "cool"'
console.log(sentence5)

// --------------------------------------------

const song1 = `I like 
U1 songs a
nd Aniruth songs`
console.log(song1)

const hello3 = 'hello my name is ' + my_name + '.Nice to meet you'
console.log(hello3)
const hello4 = `hello my name is ${my_name}. Nice to meet you. I am ${1 + 100} years old`
console.log(hello4)

const html = `<div>
<h2>${my_name}</h2>
<p>${hello4}</p>
</div>`
console.log(html)
// document.body.innerHTML = html

// --------------------------------------------

const isDrawing = false
const age = 18
const ofAge = age > 19
console.log(ofAge)

// --------------------------------------------

const s1 = '18'
console.log(s1 == 18)

// 10 === '10'
// 10 == '10'
