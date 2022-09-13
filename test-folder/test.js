// let pairsByIndex = [[0, 3], [1, 2], [2, 1], null, [3, 0]];

// function testNull(arr){
//   if (pairsByIndex.some(null) === true)
//   return 
// }

// // If there is a null value in the array exit the program with the error code
// // https://nodejs.org/api/process.html#process_process_exit_code
// // process.exit(1);

// function checkNull(arr){
//   return arr.some(() => {return arr.includes(null)})
// }
// if(checkNull(pairsByIndex)) return;

// let students = ["Islam", "Lesley", "Harun", "Rukmini"];
// let mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

// let pairs = pairsByIndex.map(function (indexes) {
//   let student = students[indexes[0]];
//   let mentor = mentors[indexes[1]];
//   return [student, mentor];
// });

// console.log(pairs);

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley",];

function isAboveThreshold(name) {
  return name.length > 3;
}
let studentNameLength = students.every(isAboveThreshold);
console.log(studentNameLength);