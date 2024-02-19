// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

const inventory = require("./data");

function getOlderCarsCount(inventory, year) {
  let olderCars = [];
  for (let index = 0; index < inventory.length; index++) {
    if (inventory[index].car_year < year) {
      olderCars.push(inventory[index].car_year);
    }
  }
  return olderCars;
}
module.exports = getOlderCarsCount;
