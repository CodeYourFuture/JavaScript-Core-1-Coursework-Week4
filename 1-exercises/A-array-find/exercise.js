/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

let names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

function findLongNameThatStartsWithA(array) {
  let result = array.find(item => item[0]=== "A" && item.length > 7 );

return result ;

}

console.log(findLongNameThatStartsWithA(names));


/* EXPECTED OUTPUT */
// "Alexandra"
