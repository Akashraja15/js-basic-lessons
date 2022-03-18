/* eslint-disable new-cap */
/* eslint-disable semi */
function car () {
  let milesDriven = 0;
  let speed = 0;

  this.accelerate = (velocity, distance) => {
    speed += velocity;
    milesDriven += distance;
  }
  this.getMilesDriven = () => milesDriven;
  this.getspeed = () => speed;
}
const testCarModules = new car();
console.log('Miles: ' + testCarModules.getMilesDriven());
console.log('Speed: ' + testCarModules.getspeed());

testCarModules.speed = 100;
testCarModules.milesDriven = 10;
console.log('Miles: ' + testCarModules.getMilesDriven());
console.log('Speed: ' + testCarModules.getspeed());

testCarModules.accelerate(4, 10);
console.log('Miles: ' + testCarModules.getMilesDriven());
console.log('Speed: ' + testCarModules.getspeed());
