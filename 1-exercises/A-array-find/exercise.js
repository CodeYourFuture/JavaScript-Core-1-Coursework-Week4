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

function findLongNameThatStartsWithA(names){
  let result = names.find((name)=>{
if(name[0]== "A" && name.length > 7) {
  return true
}
  })
  return result
}
let longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
