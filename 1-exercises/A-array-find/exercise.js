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

let longNameThatStartsWithA = names.find(element => element.startsWith('A') && element.length > 7);

console.log(longNameThatStartsWithA);

const arr = [1,2,3,4,5,6]
// function smallEnough(a, limit) {
//   return a.every((element) => (element < limit ? true : false));
// }

function smallEnough(a, limit) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] < limit) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(smallEnough(arr, 0))


/* EXPECTED OUTPUT */
// "Alexandra"
