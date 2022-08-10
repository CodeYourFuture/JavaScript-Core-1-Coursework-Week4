// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// let numbersMultipliedByOneHundred; // complete this statement

//solution 1 callback function
// function times100(num) {
//   return num * 100;
// }

// let numbersMultipliedByOneHundred = numbers.map(times100);
// console.log(numbersMultipliedByOneHundred);

//solution 2 callback function within
// let numbersMultipliedByOneHundred = numbers.map(function times100(num) {
//   return num * 100;
// });
// console.log(numbersMultipliedByOneHundred);

//solution 3 anonymous function
// let numbersMultipliedByOneHundred = numbers.map(function (num) {
//   return num * 100;
// });
// console.log(numbersMultipliedByOneHundred);

//solution 4 arrow function but it automatically adds brackets
// let numbersMultipliedByOneHundred = numbers.map((num) => {
//   return num * 100;
// });
// console.log(numbersMultipliedByOneHundred);

//solution 4 remove braces
let numbersMultipliedByOneHundred = numbers.map((num) => num * 100);
console.log(numbersMultipliedByOneHundred);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/
