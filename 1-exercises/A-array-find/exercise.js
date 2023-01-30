/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here
// function longNameThatStartsWithA(names){
// let longName = names.length > 7;
// let x = names.find("A")
// return x
// }

 function findLongNameThatStartWithA(names){
    return names.find(value => value[0] === 'A' && value.length > 7)
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




console.log(findLongNameThatStartWithA(names));

/* EXPECTED OUTPUT */
// "Alexandra"
