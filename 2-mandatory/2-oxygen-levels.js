/*
    Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
    somewhere safe while they call home for help.

    Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

    To be safe, they need to land on the first unnamed planet that has Oxygen levels between 19.5% and 23.5%.

    Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%

    Some string methods that might help you here are .replace() and .substring().
*/

// const planet1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];

// function findSafeOxygenLevel(planet) {
//   let oxygenLevel = planet
//     .filter(item => item.includes("%"))
//     .map(value => (value.replace(/%/g, "")));


//   let oxygenNumber = oxygenLevel.map(Number);

//   for (let num of oxygenNumber) {
//     if (19.5 < num && num < 23.5) {
//       return `${num}%`;
//     }
//   }
// }
// findSafeOxygenLevel(planet1);

function findSafeOxygenLevel(arr) {
  const newArr = arr.filter(item => item.includes("%") && parseFloat(item) > 19.5 && parseFloat(item) < 23.5);

  return newArr[0];

}



/* ======= TESTS - DO NOT MODIFY ===== */

test("findSafeOxygenLevel function works - case 1", () => {
  expect(
    findSafeOxygenLevel(["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"])
  ).toEqual("19.9%");
});

test("findSafeOxygenLevel function works - case 2", () => {
  expect(
    findSafeOxygenLevel(["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"])
  ).toEqual("20.2%");
});

test("findSafeOxygenLevel function filters out invalid percentages", () => {
  expect(
    findSafeOxygenLevel(["200%", "-21.5%", "20", "apes", "21.1%"])
  ).toEqual("21.1%");
});

test("findSafeOxygenLevel function returns undefined if no valid planets found", () => {
  expect(findSafeOxygenLevel(["50"])).toBeUndefined();
});