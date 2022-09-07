/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

function findLongNameThatStartsWithA(n) {
  return n.length > 7 && n[0] === "A";
}

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

let longNameThatStartsWithA = names.find(findLongNameThatStartsWithA);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"


// ---- or ----

// function findLongNameThatStartsWithA(arrOfNames) {
//   const name = arrOfNames.find((n) => n.length > 7 && n[0] === "A");
//   return name;
// }

// let names = [
//   "Rakesh",
//   "Antonio",
//   "Alexandra",
//   "Andronicus",
//   "Annam",
//   "Mikey",
//   "Anastasia",
//   "Karim",
//   "Ahmed",
// ];

// let longNameThatStartsWithA = findLongNameThatStartsWithA(names);

// console.log(longNameThatStartsWithA);