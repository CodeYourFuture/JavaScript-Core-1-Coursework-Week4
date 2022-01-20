/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here
function isLongName(names) {
  return names.length > 7 && names.startsWith("A");
}

function findLongNameThatStartsWithA(names){
  return names.find(isLongName);

}
// short way of writing code lines 7-12
// const findLongNameThatStartsWithA = (listNames) =>
//   listNames.find((name) => name.length > 7 && name.startsWith("A"));
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



let longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
