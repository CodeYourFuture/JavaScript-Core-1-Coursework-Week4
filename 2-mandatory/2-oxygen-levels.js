/*
    Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
    somewhere safe while they call home for help.

    Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

    To be safe, they need to land on the first unnamed planet that has Oxygen levels between 19.5% and 23.5%.

    Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%

    Some string methods that might help you here are 
    
    .replace()  - method returns a new string with some or all matches of a pattern 
    
    .substring() -  The substring() method returns the part of the string between the start and end indexes, or to the end of the string
// Lower bound 19.5% and upper bound 23.5% = a number that is in between 2 numbers  - Oxygen between 19.5% and 23.5%

parseFloat()  The parseFloat() method converts a string into a point number (a number with decimal points). 

to compare strings we need to convert them to numbers
*/
function findSafeOxygenLevel(x) {
  //do the comparrison for every number
  for (i = 0; i < x.length; i++) {
    //convert string to number
    num = parseFloat(x[i]);
    //find a number greater than 19.5% and less than 23.5%
    if (num >= 19.5 && num < 23.5) {
      // if this, then do this
      //first safe planet = the first time this is true - not the whole array
      // return the oxygen level
      return num + `%`; //returns  string
    }
  }
}

console.log(
  findSafeOxygenLevel(["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"])
);

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
