function greet1() {
    console.log('Welcome');
}
greet1();
greet1();
greet1();

//-------------------------------------------------


function greet2(msg, name) {
    return 'Hello, ' + name + '! ' + msg;
}
var greetmessage = greet2('How are you?', 'Akash Raja')  //not given value in name variable - it prints undefined
console.log(greetmessage);

//----------------------------------------------------

function greet3(msg, name) {
    if (name) {
        return 'Hello, ' + name + '! ' + msg;
    }
    else {
        return 'Hello, Anonymous!! ' + msg;
    }
}
var greetmessage = greet3('How are you?')    
console.log(greetmessage);

//-----------------------------------------------------------
// OBJECTS


var obj = new Object();
var obj2 = {};

var user1 = new Object();
user1.name = 'akash';
user1.profession = 'software developer'

user1.sayHi = function() {
    console.log('Hello, ' + user1.name);
}
user1.sayHi();


var user2 = {
    name: 'raja',
    profession: 'Doctor',
    sayHi: function() {
        console.log('Hello, ' + this.name);
    }
}
user2.sayHi();

var user3 = user2;
user3.sayHi();
user2 = null;
user3.sayHi();
console.log(user3);