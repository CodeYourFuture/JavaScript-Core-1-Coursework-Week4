/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

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

//let longNameThatStartsWithA = findLongNameThatStartsWithA(names);

/* EXPECTED OUTPUT */
// "Alexandra"
let findLongNameThatStartsWithA = (namesList) =>
  namesList.find((name) => name[0] === "A" && name.length > 7);

const longNameThatStartsWithA = findLongNameThatStartsWithA(names);
console.log(longNameThatStartsWithA);
