/*
   This program should check if the array `group` contains only students
*/
function isGroupOnlyStudents(group){
  

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];

let groupIsOnlyStudents = group.includes(students); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}
}; console.log();


/* EXPECTED RESULT */

// The group does not contain only students
