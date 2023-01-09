/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts 
  with A and is longer than 7 letters.
*/

// write your code here
function findLongNameThatStartsWithA(array) {
  return array.find((element) => element[0] ==='A' 
  && element.length > 7);
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

let longNameThatStartsWithA = findLongNameThatStartsWithA(names);
findLongNameThatStartsWithA(names)
console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"


let  words = [ 'hello', 'world'];
let array = ['Hello', 3, true, false];
console.log(words);
console.log(array);
let arr = ['Greet', true, 5,{name: 'James', age: 12, grade: '7'}];
console.log(arr);
let students = [
  {name: 'James', age: 13, grade: '7'},
  { name: 'Jan', age: 11, grade: '7'},
  { name: 'Jamey', age: 12, grade: '7'}
]
console.log(students[2](age));