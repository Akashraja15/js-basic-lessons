const names = ['John', 'Sam', 'Peter'];
console.log(names[0]);
console.log(names.length);
console.log(names[names.length - 1]);

/*
names is an array of strings 
length is a property of array
it returns a number
the lower bound of an array is 0 (ZERO)
the upper bound of the array is lenght -1;
 The index for john 0
 The index for sam 1
 The index for peter 2
 */

 //-----------------------------------------------------

 // methods of Array
 names.push('Suresh');
 console.log('After push: ' + names);

 const names2 = [...names, 'Raj'];
 console.log('names2: '+ names2);

names.unshift('poppy');
console.log('unshift:' + names);

const names3 = ['Raj', ...names];
console.log(names3);


//------------------------------------------------------------------

// Method Slice()
const bikes = ['bianchi', 'miele', 'panasonic', 'miyata', 'RE'];
const b1 = [...bikes.slice(0, 2)];
console.log(b1);

const b2 = [...bikes.slice(2)];
console.log(b2);

const newBikes = [
    ...bikes.slice(0, 2),
    'benotto',
    ...bikes.slice(2)
];
console.log('newBikes: ' + newBikes);

const newBikes2 = [
    ...bikes.slice(0, 3),
    'benotto',
    ...bikes.slice(4)
];
console.log('newBikes2: ' + newBikes2);


const indexOfSam = names.findIndex(name => name === 'Sam');
console.log('IndexOfSAM: ' + indexOfSam);


// write a function to delete a name from the array?
function deleteName(nametodelete, names) {
    const indexOfname = names.findIndex(n => n === nametodelete);
    console.log('indexOf name to delete: ' + indexOfname);
    const newArray = [
        ...names.slice(0, indexOfname),
        ...names.slice(indexOfname +1),
    ];
    return newArray;
};
const deletedNames = deleteName('John', names);
console.log('Before Delete: ' + names);
console.log('After Delete: ' + deletedNames);




//---------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
// numbers.splice(3, 2);  // From the 3rd index delete the next 2 values
// console.log(numbers);

const pizzaSlice = numbers.slice(2, 4);
// Immutable method - Does not change the source array
console.log('pizzaSlices: ' + pizzaSlice);
console.log('Original Numbers: ' + numbers);


numbers.reverse();
console.log(numbers);
// Anytime you want to use a mutation method and not mutate the original array
// we need to take a copy of the array
const numbersReversed = [...numbers].reverse();
console.log(numbersReversed);
