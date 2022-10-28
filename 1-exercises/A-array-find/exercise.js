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
return names.length > 7;

let findLongNameThatStartsWithA= names.find(findLongNameThatStartsWithA);
console.log(longNameThatStartsWithA);


//const result = names.find((el) => el. startsWith("A") && el.length > 7)
//console.log(result)

/* EXPECTED OUTPUT */
// "Alexandra"
