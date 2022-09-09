// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
// Solution 1
let numbersMultipliedByOneHundred=numbers.map(number=>number*100); // complete this statement

// Solution 2
let solution2=numbers.map(number=>{
  return number*100
});

// Solution 3
let solution3=numbers.map(function (number) {
  return number *100;
});

// Solution 4
let solution4=numbers.map(function multiplyWith100(number) {
  return number * 100;
});
console.log(numbersMultipliedByOneHundred);
console.log(solution2);
console.log(solution3);
console.log(solution4);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/