/* eslint-disable semi */

class Pizza {
  // Contructor
  constructor (toppings = [], customer) {
    this.toppings = toppings;
    this.customer = customer;
  }
  //Static property
  static extraToppings = ['pepperoni', 'Cheese'];
  //static method
  static sayThankyou() {
      console.log('Thank you!!!');
  }
  // instance property
  slices = 10;

  get noOfSlices() {
      return this.slices;
  }
//   set noOfSlices(value) {
//       slices = value;
//       this.slices = values;
//   }

  eat () {
    console.log(this.toppings);
    console.log(this.customer);
  }
  // instance method
  getCokeOrPepsi = () => {
      console.log('Coke');
      console.log('Pepsi');
      console.log(this);
  }
  // Private field can only be modified inside a class
  bankBalance = 10000;

  get balance() {
      return this.bankBalancebankBalance;
  }
  set balance(value) {
      this.bankBalancebankBalance = value;
  }

}
const myLunch = new Pizza(['onion', 'mushroom', 'capsicum'], 'Akash');
// console.log(myLunch);
myLunch.eat();
myLunch.toppings = ['Carrot', 'Almonds', 'Lobster']
console.log(myLunch.toppings);
console.log(Pizza.extraToppings);
Pizza.extraToppings = ['onions', 'Lettuce'];
console.log(Pizza.extraToppings);
Pizza.sayThankyou();
console.log(myLunch.noOfSlices);
myLunch.noOfSlices = 6;
console.log(myLunch.noOfSlices);
myLunch.getCokeOrPepsi();
myLunch.slices = 12;
console.log(myLunch.noOfSlices);
console.log(myLunch.balance);
myLunch.balance = 5000;
console.log(myLunch.balance);
myLunch.bankBalance = 2000;
console.log(myLunch.balance);
