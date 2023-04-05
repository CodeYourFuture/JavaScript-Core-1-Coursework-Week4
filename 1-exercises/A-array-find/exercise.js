/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// we are using function with a parameter that is an array of string

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

function isLongName(singleName) {
  return singleName.length > 7;
}

let longName = names.find(isLongName);

function isStartingWithA(singleName) {
  return singleName[0] === "A";
}

let nameStartingWithA = names.find(isStartingWithA);

function findLongNameThatStartsWithA(names) {
  return nameStartingWithA && longName;
  
}

let longNameThatStartsWithA = findLongNameThatStartsWithA(names);


console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"


// function findLongName(names) {
//   let longName = [];
//   if (names.length > 7) {
//     longName.push(names);
//   }
//   return longName;
// }

// function findLongNameThatStartsWithA(string){
//   let LongNameStartingWithA = [];
//   for (let letter of string) {
//     if (findLongName(string) && letter[0] === "A") {
//       LongNameStartingWithA.push(string)
//     }
//   }
//   return LongNameStartingWithA
// }