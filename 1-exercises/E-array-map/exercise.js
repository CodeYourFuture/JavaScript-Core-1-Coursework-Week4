// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let numbersMultipliedByOneHundred = numbers.map(number => number * 100); // complete this statement Done ✔️

let numberByHundred = numbers.map(function byHundred(number){
  return number * 100; 
})

let numberInHundred = numbers.map(number => {
  return number * 100; 
})


console.log(numbersMultipliedByOneHundred);
console.log(numberByHundred); 
console.log(numberInHundred); 


/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/