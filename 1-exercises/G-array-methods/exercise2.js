/*
  Array methods - concat
  ----------------------
  The variable everyone should be an array containing both mentors and students.
*/

let mentors = ["Daniel", "Irina", "Rares"];
let students = ["Rukmini", "Abdul", "Austine", "Swathi"];

  let combinedEveryone  = mentors.concat(students);
  let everyone = combinedEveryone.sort((a, b) => a - b);
 // complete this statement

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(everyone);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Rares", "Rukmini", "Abdul", "Austine", "Swathi"]
*/
