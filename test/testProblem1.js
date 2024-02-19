const problem1 = require("../problems/problem1")
const inventory = require("../problems/data")

let carId = problem1(inventory,33);
if(carId){
    console.log(`Car 33 is a ${carId.car_make}  ${carId.car_model} ${carId.car_year}`);
} else{
    console.log("Car 33 is not found");
}