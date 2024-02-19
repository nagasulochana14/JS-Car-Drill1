const problem2 = require("../problems/problem2");
const inventory = require("../problems/data");

let lastCar = problem2(inventory);
console.log(`Last Car is a ${lastCar.car_make} ${lastCar.car_model}`);
