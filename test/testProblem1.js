const problem1 = require("../problems/problem1");
const inventory = require("../problems/data");

let result = problem1(inventory, 33);
if (result) {
  console.log(
    `Car 33 is a ${result.car_make}  ${result.car_model} ${result.car_year}`
  );
} else {
  console.log("Car 33 is not found");
}
