// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let numbersMultipliedByOneHundred = numbers.map(element => element * 100); // complete this statement

console.log(numbersMultipliedByOneHundred);


// //Solution 2:
// function MultipliedByOneHundred(numbers) {
//   return numbers *100;
// }
// let numbersMultipliedByOneHundred = numbers.map(MultipliedByOneHundred);
// console.log(numbersMultipliedByOneHundred);

// Solution 3
// let numbersMultipliedByOneHundred = numbers.map(function (number) {
//   return number * 100;
// });


/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/


