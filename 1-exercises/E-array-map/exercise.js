// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let numbersMultipliedByOneHundred = numbers.map(function double(number) {
  return number * 100;
}); // complete this statement

console.log(numbersMultipliedByOneHundred);

let n = [0.1, 0.2, 0.3, 0.4, 0.5];

let numbersMultiByOneHundred = n.map(function (n) {
  return n * 100;
});
console.log(numbersMultiByOneHundred);

let num = [0.1, 0.2, 0.3, 0.4, 0.5];

let numMultipliedByOneHundred = num.map((num) => {
  return num * 100;
});
console.log(numMultipliedByOneHundred);

let num1 = [0.1, 0.2, 0.3, 0.4, 0.5];

let numbMultipliedByOneHundred = num1.map((num1) => num1 * 100);
// complete this statement

console.log(numbMultipliedByOneHundred);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/
