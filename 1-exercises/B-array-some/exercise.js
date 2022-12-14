/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsByIndex` can contain null values
  It is decided that if there is a null value the program should exit
  - Add a check for null values, and if one exists, exit the program
  - Do not edit any of the existing code
*/

let pairsByIndex = [[0, 3], [1, 2], [2, 1], null, [3, 0]];
// using for loop:
// function isNull(lists){
//  for  (let list of lists){
//   if (list === null){
//     console.log('Exiting...');
//     process.exit(1);
//   }
//  }
// }
// isNull(pairsByIndex);

//using some()method:
if(pairsByIndex.some(element => element === null)){
  console.log('Terminating...');
  process.exit(1)
}

// If there is a null value in the array exit the program with the error code
// https://nodejs.org/api/process.html#process_process_exit_code
// process.exit(1);

let students = ["Islam", "Lesley", "Harun", "Rukmini"];
let mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

let pairs = pairsByIndex.map(function (indexes) {
  let student = students[indexes[0]];
  let mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);
