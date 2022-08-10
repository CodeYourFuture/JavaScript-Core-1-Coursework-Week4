// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multipleBy100(num) {
  return num * 100;
}

let numbersMultipliedByOneHundred = numbers.map(multipleBy100); // complete this statement
let numbersMultipliedByOneHundred2 = numbers.map((value) =>
  multipleBy100(value)
);
let numbersMultipliedByOneHundred3 = numbers.map((value) => {
  return value * 100;
});

console.log(numbersMultipliedByOneHundred);
// console.log(numbersMultipliedByOneHundred2);
// console.log(numbersMultipliedByOneHundred3);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/
