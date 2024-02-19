const problem5 = require("../problems/problem5");
const inventory = require("../problems/data");

let result = problem5(inventory, 2000);
console.log(result);
console.log("Number of cars older than 2000:", result.length);
