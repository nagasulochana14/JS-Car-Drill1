// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function sortCarModelsAlphabetically(inventory) {
  let carModels = [];
  if (Array.isArray(inventory)) {
    for (let index = 0; index < inventory.length; index++) {
      carModels.push(inventory[index].car_model);
    }
  }
  return carModels.sort();
}
module.exports = sortCarModelsAlphabetically;
