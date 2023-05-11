// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//let numbersMultipliedByOneHundred = numbers.map(number => number * 100); // complete this statement

// another solution
/* function hundredTimes(number){
  return number * 100
}
let numbersMultipliedByOneHundred = numbers.map(hundredTimes); */

// another solution
//let numbersMultipliedByOneHundred = numbers.map(function hundredTimes(number){return number * 100});

// another solution
//let numbersMultipliedByOneHundred = numbers.map(function (number){return number * 100});

//another solution
let numbersMultipliedByOneHundred = numbers.map((number) => {
  return number * 100;
});

// do not edit below
console.log(numbersMultipliedByOneHundred);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/