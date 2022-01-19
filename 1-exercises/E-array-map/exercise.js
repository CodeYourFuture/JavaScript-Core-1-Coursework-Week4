// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// Solution 1
let numbersMultipliedByOneHundred = numbers.map(number => number * 100);

// Solution 2
let numbersMultipliedByOneHundred0 = numbers.map(number => {
  return number * 100;
});
// Solution 3
let numbersMultipliedByOneHundred1 = numbers.map(function (number) {
  return number * 100;
});

// Solution 4
let numbersMultipliedByOneHundred2 = numbers.map(function Double(number) {
  return number * 100;
});

console.log(numbersMultipliedByOneHundred);
console.log(numbersMultipliedByOneHundred0);
console.log(numbersMultipliedByOneHundred1);
console.log(numbersMultipliedByOneHundred2);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/