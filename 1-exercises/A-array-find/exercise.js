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
function nameStartsWithA(name) {
  const startsWithA = name[0] === "A";
  return startsWithA;
}

function graterThanSeven(name) {
  return name.length > 7;
}

function findLongNameThatStartsWithA(names) {
  const namesWithA = names.filter(nameStartsWithA);
  const nameLongerThanSeven = namesWithA.find(graterThanSeven);
  return nameLongerThanSeven;
}

let longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
// console.log(longNameThatStartsWithA);
