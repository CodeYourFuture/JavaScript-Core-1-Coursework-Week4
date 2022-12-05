import { exit } from "node:process";  

let pairsByIndex = [[0, 3], [1, 2], [2, 1], , [3, 0]];

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


function isNull(pairs) {
  if (pairs === null) {           // check if it is null, if yes >                exit
    process.exit(1) 
    
    //   console.log(`About to exit with code: ${pairs}`);
    // }
  }
  else {                          // if not, print pairs
  console.log(pairs);
  }
  }


let isNotNull = pairsByIndex.some(isNull) // is applying the above function to each pair.

console.log(isNotNull);