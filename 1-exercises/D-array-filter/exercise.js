/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
*/

let pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];


let students = ["Islam", "Lesley", "Harun", "Rukmini"];
let mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

let pairsByIndex = pairsByIndexRaw.filter(function(pair){
  return Array.isArray(pair) && pair.length === 2 && typeof pair[0] === "number" && typeof pair[1] === "number" && pair[0] < students.length && pair[1] < mentors.length;
}); // Complete this statement

// let students = ["Islam", "Lesley", "Harun", "Rukmini"];
// let mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

let pairs = pairsByIndex.map(function (indexes) {
  let student = students[indexes[0]];
  let mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);

/* EXPECTED RESULT

  [ [ 'Islam', 'Luke' ], [ 'Lesley', 'Mozafar' ], [ 'Harun', 'Irina' ] ]
*/