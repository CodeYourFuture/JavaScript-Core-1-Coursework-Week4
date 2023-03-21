// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let numbersMultipliedByOneHundred = numbers.map(number => number*100); 

let numbersMultiplied = numbers.map(function (number) {return number*100});

let numbersMultipliedByHundred = numbers.map(number => {return number*100});// complete this statement

console.log(numbersMultipliedByOneHundred);
console.log(numbersMultiplied);
console.log(numbersMultipliedByHundred);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/