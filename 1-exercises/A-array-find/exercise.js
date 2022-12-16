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

/*let longNameThatStartsWithA = findLongNameThatStartsWithA(names);
function findLongNameThatStartsWithA(names){
  for (i=0;i<names.length;i++){
    if (names[i].length>7 && names[i][0]==="A") return names[i];
  }
}*/
let longNameThatStartsWithA=names.find(value => value.length > 7 && value[0]==="A")

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
