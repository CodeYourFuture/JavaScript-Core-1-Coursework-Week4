/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
*/

let pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];

function filterOut(pair) {
  if (pair.length !== 2) {
    console.log(pair);
  }
}

let pairsByIndex = pairsByIndexRaw.filter(filterOut); // Complete this statement

let students = ["Islam", "Lesley", "Harun", "Rukmini"];
let mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

let pairs = pairsByIndex.map(function (indexes) {
  let student = students[indexes[0]];
  let mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);

/* EXPECTED RESULT

  [ [ 'Islam', 'Luke' ], [ 'Lesley', 'Mozafar' ], [ 'Harun', 'Irina' ] ]
*/

// Imagine you have an array of students' test scores:

// ```js
// let testScores = [90, 50, 100, 66, 25, 80, 81];
// ```

// You want to show only the test scores that are higher than 80. How do you do that for every value in the array?

// We can write a function that checks if one score is greater than 80:

// ```js
// function isHighScore(score) {
//   return score > 80;
// }
// ```

// To find out which scores were greater than 80, you'd have to run this function against every score in the array, and push the 80+ scores into a new array. Thankfully there is an array method that does just this!

// ## `.filter()`

// _Runs every item in the array through a condition that we set, and returns a new array with the values that match the condition_.

// ```js
// let highTestScores = testScores.filter(isHighScore);

// console.log(highTestScores); // logs [90, 100, 81]
