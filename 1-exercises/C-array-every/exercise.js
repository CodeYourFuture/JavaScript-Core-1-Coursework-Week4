/*
   This program should check if the array `group` contains only students
*/

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];

function isStudents(name) {
  return students.includes(name)
}
let groupIsOnlyStudents = group.every(isStudents); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
