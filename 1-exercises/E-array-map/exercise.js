// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
// long version
function multiple (number) {  
  return number * 100;
}

// callback function
let numbersMultipliedByOneHundred = numbers.map(function multiple(number){
  return number * 100;
});

// removing function name
let numbersMultipliedByOneHundred = numbers.map(function (number) {
  return number * 100;
});

// shorter still removing function word and using => instead ... goes inside ()
let numbersMultipliedByOneHundred = numbers.map(number => {
  return number * 100;
});

// arrow function  removing {}
let numbersMultipliedByOneHundred = numbers.map(number => number * 100);

let numbersMultipliedByOneHundred = numbers.map(multiple); // complete this statement


console.log(numbersMultipliedByOneHundred);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/