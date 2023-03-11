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
function getlongNameThatStartsWithA(name) {
  return name > 7 && name.startsWith("A");
}
let longNameThatStartsWithA = names.find(getlongNameThatStartsWithA);
// let longNameThatStartsWithA = names.find((element) => {
//   return element.length > 7 && element.startsWith("A");
// });

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
