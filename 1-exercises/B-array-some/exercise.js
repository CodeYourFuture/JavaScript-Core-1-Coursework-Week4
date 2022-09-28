/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain null values
  It is decided that if there is a null value the program should exit
  - Add a check for null values, and if one exists, exit the program
  - Do not edit any of the existing code
*/
let pairsByIndex = [[0, 3], [1, 2], [2, 1], null, [3, 0]];
// let pairsByIndex = [
//   [0, 3],
//   [1, 2],
//   [2, 1],
//   [3, 0],
// ];

// If there is a null value in the array exit the program with the error code
// https://nodejs.org/api/process.html#process_process_exit_code
// process.exit(1);
// console.log(pairsByIndex.includes(null));
let students = ["Islam", "Lesley", "Harun", "Rukmini"];
let mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

// if (pairsByIndex.some((e) => e === null)) {
//   throw new Error("you have invalid value");
// } else {
//   let pairs = pairsByIndex.map(function (indexes) {
//     let student = students[indexes[0]];
//     let mentor = mentors[indexes[1]];
//     return [student, mentor];
//   });
//   console.log(pairs);
// }
// console.log("hello");
// 💫 💫 💫 💫 💫
try {
  if (pairsByIndex.some((e) => e === null)) {
    let error = Error("you have invalid value");
    throw error;
  } else {
    let pairs = pairsByIndex.map(function (indexes) {
      let student = students[indexes[0]];
      let mentor = mentors[indexes[1]];
      return [student, mentor];
    });
    console.log(pairs);
  }
} catch (error) {
  console.log(error);
}
console.log("hello");
