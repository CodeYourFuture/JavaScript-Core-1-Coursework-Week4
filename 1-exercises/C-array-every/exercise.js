/*
   This program should check if the array `group` contains only students
*/


function isAStudent(name) {
  return students.includes(name);
}



let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];

let groupIsOnlyStudents; // complete this statement
let groupIsOnlyStudents = group.every(isAStudent); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
/* EXPECTED RESULT */

// The group does not contain only students
