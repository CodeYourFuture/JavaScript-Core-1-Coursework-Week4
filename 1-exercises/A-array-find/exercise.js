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
  "Karimbnn",
  "Ahmed",
];
function isLongTo7AndStartWithA(arrNames){
   return arrNames.length > 7 && arrNames[0][0] == "A";
}
let longNameThatStartsWithA = names.find(isLongTo7AndStartWithA);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
