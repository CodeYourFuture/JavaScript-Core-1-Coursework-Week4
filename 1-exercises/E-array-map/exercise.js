// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

function multiply (number) {
  return number * 100;
}


let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let numbersMultipliedByOneHundred2 = numbers.map(multiply);

let numbersMultipliedByOneHundred3 = numbers.map(number => number * 100);

let numbersMultipliedByOneHundred4 = numbers.map(function (number) {
  return number * 100;
})

let numbersMultipliedByOneHundred = numbers.map(number => {
  // console.log(number)
 return number*100
}); // complete this statement

console.log(numbersMultipliedByOneHundred);

console.log(numbersMultipliedByOneHundred2);

console.log(numbersMultipliedByOneHundred3);

console.log(numbersMultipliedByOneHundred4);
/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/