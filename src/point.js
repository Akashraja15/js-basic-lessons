/* eslint-disable no-unused-vars */
/* eslint-disable semi */
const empty = {};
const point = { x: 10, y: 50 };
const point2 = { x: point.x, y: point.y + 1 };

const book = {
  'main title': 'Java script', // Property names spaces
  'sub-title': 'Guide to Java script for beginners',
  for: 'student', // reserved keyword
  author: {
    first: 'Akash',
    last: 'Raja'
  }
};
console.log(book['main title']);
console.log(book['sub-title']);
console.log(book.for);
console.log(book.author.first);
console.log(book.author.last);
// console.log(book.sub-title);
console.log(book.for);
