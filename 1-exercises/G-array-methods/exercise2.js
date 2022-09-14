/*
  Array methods - concat
  ----------------------
  The variable everyone should be an array containing both mentors and students.
*/

let mentors = ["Daniel", "Irina", "Rares"];
let students = ["Rukmini", "Abdul", "Austine", "Swathi"];

let everyone = [...mentors, ...students]; // complete this statement (spread operator)
const all = mentors.concat(students); // using .concat()

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(everyone);
console.log(all);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Rares", "Rukmini", "Abdul", "Austine", "Swathi"]
*/
