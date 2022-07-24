// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function hundred(number) {
  return number * 100;
}


let numbersMultipliedByOneHundred = numbers.map(hundred); // complete this statement

console.log(numbersMultipliedByOneHundred); // 1

numbersMultipliedByOneHundred = numbers.map(function hundred(number) {
  return number * 100;
});

console.log(numbersMultipliedByOneHundred); // 2

numbersMultipliedByOneHundred = numbers.map(function (number) {
  return number * 100;
});

console.log(numbersMultipliedByOneHundred); // 3

numbersMultipliedByOneHundred = numbers.map(number => {
  return number * 100;
});

console.log(numbersMultipliedByOneHundred); // 4

numbersMultipliedByOneHundred = numbers.map(number => number * 100);

console.log(numbersMultipliedByOneHundred); // 5


console.log(numbersMultipliedByOneHundred);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/