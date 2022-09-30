// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let numbersMultipliedByOneHundred = numbers.map( element => element*100 ); // complete this statement

//  or
let numbersMultipliedByOneHundreds = numbers.map(function multipliedByHundered(element){
 return element * 100;
} );

// or 

let numbersMultipliedByOneHundredss = numbers.map(element => {
 return element * 100
});

console.log(numbersMultipliedByOneHundredss);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/