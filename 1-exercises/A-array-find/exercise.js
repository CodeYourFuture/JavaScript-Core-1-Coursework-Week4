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

function findLongNameThatStartsWithA(namesArray) {
  return namesArray.startsWith("A") && namesArray.length > 7;
}

let longNameThatStartsWithA = names.find(findLongNameThatStartsWithA);



console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
