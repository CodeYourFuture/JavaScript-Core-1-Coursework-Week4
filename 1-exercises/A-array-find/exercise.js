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

// ==============short option==============

// let longNameThatStartsWithA = names.find(value => value[0] === 'A' && value.length > 7)

// console.log(longNameThatStartsWithA);



function findLongNameThatStartWithA(array){
    return array.find(value => value[0] === 'A' && value.length > 7)
  }

console.log(findLongNameThatStartWithA(names));



/* EXPECTED OUTPUT */
// "Alexandra"

