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

let longNameThatStartsWithA = findLongNameThatStartsWithA(names);
function findLongNameThatStartsWithA(names)
{
    return names.find((name) => name.length > 7 && name[0] === "A");
}

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
