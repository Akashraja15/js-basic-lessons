/* eslint-disable prefer-const */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-array-constructor */
/* eslint-disable no-new-object */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
const o1 = Object.create({ x: 100, y: 200 });
console.log('x=' + o1.x + 'y=' + o1.y);
console.log(o1);

const o2 = Object.create(null);
const o3 = Object.create(Object.prototype);
// const o3 = new Object();
// const o3 = {};
console.log(o2);
console.log(o3);

// ---------------------------------------------------------

function getChild (parent) {
    if (parent == null) throw TypeError();
    return Object.create(parent);
}
const o4 = { x: "don't change this value" };
console.log(o4.x);
const p = getChild(o4); // object.create(o4)
console.log(p);
/*   o4 = null;
p = getChild(o4) // object.create(null);
console.log(p); */

Object.prototype = 0; // (zero)
// console.log(Object);
// The prototype properties of built-in are read-only
// Object.prototype unchanged.

// ---------------------------------------------------------------

let o5 = {};
console.log(o5);
o5.x = 100;
console.log(o5);
p = getChild(o5);
console.log(p);
p.y = 200;
let q = getChild(p);
q.z = 300;
console.log(q);
console.log("q.x + q.y + q.z" + (q.x + q.y + q.z));
console.log("p.x + p.y" + (p.x + p.y));
console.log("o5.x + o5.y" + (o5.x + o5.y));
console.log("o5.x + o5.y" + o5.x);
