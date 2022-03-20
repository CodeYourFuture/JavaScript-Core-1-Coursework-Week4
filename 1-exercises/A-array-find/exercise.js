/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.

  .find() finds the first element 

  LOGIC: find the first name which starts with A and is longer than 7 letters
*/

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
// what is  - this is a spcial vaiable element - the element in an array
// declaration with a variable named longNameThatStartsWithA = findLongNameThatStartsWithA (which is th earray names )
let longNameThatStartsWithA = findLongNameThatStartsWithA(names);

// // option 1
// function findLongNameThatStartsWithA(x) {}

// console.log(longNameThatStartsWithA);
//option 2
function findLongNameThatStartsWithA(x) {
  for (let element of x) {
    if (element.charAt(0) === `A` && element.length > 7) {
      return element;
    }
  }
}
console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
