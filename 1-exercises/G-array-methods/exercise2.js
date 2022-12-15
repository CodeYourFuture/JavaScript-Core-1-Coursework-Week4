/*
  Array methods - concat
  ----------------------
  The variable everyone should be an array containing both mentors and students.
*/

let mentors = ["Daniel", "Irina", "Rares"];
let students = ["Rukmini", "Abdul", "Austine", "Swathi"];

//let everyone = mentors.map(element => mentors.concat(students)); // complete this statement
  let everyone = mentors.concat(students);
//   let everyone = mentors.push(students)                 // 4
//let everyone = mentors.push(mentors.concat(students)); // 4
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(everyone);
//console.log(mentors);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Rares", "Rukmini", "Abdul", "Austine", "Swathi"]
*/
