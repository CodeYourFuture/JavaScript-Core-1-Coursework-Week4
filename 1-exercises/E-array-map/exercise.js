// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//first
function multiplied1(num){
  return num*100;
}
let result1 =numbers.map(multiplied1);
console.log(result1);

//second
let result2=numbers.map(function multiplied2(num){
  return num*100;
});
console.log(result2);

//third
let result3=numbers.map(function(num){
  return num*100;
});
console.log(result3);

//forth
let numbersMultipliedByOneHundred=numbers.map((num)=>num*100) ; // complete this statement

console.log(numbersMultipliedByOneHundred);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/