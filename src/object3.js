/* eslint-disable prefer-const */
/* eslint-disable no-undef-init */
/* eslint-disable semi */
const book = {
  'main title': 'JavaScript', // property names include spaces  you have to put in single quotes
  subtitle: 'The Dedinitive guide', // - in key you have to put in single quotes
  for: 'all audience', // reversed keyword you have to put in sinle quotes
  author: {
    firstname: 'Akash',
    surname: 'Raja '
  }
};
let len = undefined;
if (book) {
  if (book.subtitle) {
    len = book.subtitle.length;
    console.log(len);
  } else { console.log('book.subtitle undefined:'); }
} else { console.log('book is null'); }

// ----------------------------------------------------

len = book && book.subtitle && book.subtitle.length;
if (len) console.log(len);

// ---------------------------------------------------------

console.log(book.author);
delete book.author;
console.log(book.author);

console.log(book['main title']);
delete book['main title'];
console.log(book['main title']);

let o6 = { x: 100 };
console.log(o6.x);
delete o6.x;
console.log(o6.x);
console.log(o6.toString);
delete o6.toString;
console.log(o6.toString);

// --------------------------------------------------

delete Object.prototype;
// var a = 1;
// delete this.a;
// function f1 () {}
// delete this.f1();
