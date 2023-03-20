// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//
//   one method of function calling
//
let numbersMultipliedByOneHundred = numbers.map(function (numbers) {
  return numbers * 100;
}); // complete this statement

console.log(numbersMultipliedByOneHundred);

//
//   second method of function calling
//

function multiple_hundred(num) {
  return num * 100;
}
let numbersMultipliedByOne = numbers.map(multiple_hundred); // complete this statement

console.log(numbersMultipliedByOne);

//
//   third  method of function calling
//

let numbersMultipliedBy = numbers.map((numbers) => numbers * 100); // complete this statement

console.log(numbersMultipliedBy);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/
