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

// function findLongNameThatStartsWithA(names){
// return names.find((names= [0]===("A"))&& names.length > 7 );
const found = names.find(element=> element.startsWith("A")&& element.length>7);

console.log(found);
/* EXPECTED OUTPUT */
// "Alexandra"
