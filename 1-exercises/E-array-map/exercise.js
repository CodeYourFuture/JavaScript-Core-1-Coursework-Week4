/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

const numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

const numbersMultipliedByOneHundred = numbers.map(function (e) {
  return e * 100;
}); // complete this statement

const numbersMultipliedByOneHundred2 = numbers.map((e) => {
  return e * 100;
});

const numbersMultipliedByOneHundred3 = numbers.map((e) => e * 100);

const numbersMultipliedByOneHundred4 = numbers.map(e => e * 100);

console.log(numbersMultipliedByOneHundred);
console.log(numbersMultipliedByOneHundred2);
console.log(numbersMultipliedByOneHundred3);
console.log(numbersMultipliedByOneHundred4);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/
