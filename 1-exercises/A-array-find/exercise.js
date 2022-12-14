/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

function findLongNameThatStartsWithA(input) {
    return input.startsWith("A") && input.length > 7;
}


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

let longNameThatStartsWithA = names.find(findLongNameThatStartsWithA);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"