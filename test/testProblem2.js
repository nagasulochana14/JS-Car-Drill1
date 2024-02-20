const problem2 = require("../problems/problem2");
const inventory = require("../problems/data");

let result = problem2(inventory);
console.log(`Last Car is a ${result.car_make} ${result.car_model}`);
