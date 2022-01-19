// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

const multiplyBy100 = (num) => {
  return num * 100;
}

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

const numbersMultipliedByOneHundred = numbers.map(multiplyBy100); // complete this statement

/* const numbersMultipliedByOneHundred = numbers.map(function multiplyBy100(num) {
     return num * 100;
   }) */

/* const numbersMultipliedByOneHundred = numbers.map(num => {
  return num * 100
}); */

// const numbersMultipliedByOneHundred = numbers.map(num => num * 100);

console.log(numbersMultipliedByOneHundred);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/