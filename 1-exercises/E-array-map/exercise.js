// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let numbersMultipliedByOneHundred = numbers.map((elem) => elem * 100);

console.log(numbersMultipliedByOneHundred);

//another solutions
//1
function multiply(number) {
  return number * 100;
}

let multiplyNumbers = numbers.map(multiply);
console.log(multiplyNumbers);

//2
let multipliedNumbers = numbers.map(function multiply(number) {
  return number * 100;
});
console.log(multipliedNumbers);

//3
let numbersMultipliedByOneHundredd = numbers.map((elem) => {
  return elem * 100;
});
console.log(numbersMultipliedByOneHundredd);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/
