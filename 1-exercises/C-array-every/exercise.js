/*
   This program should check if the array `group` contains only students
*/

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];
function isStudent(name){
  for (element of students){
    return name === element;
  };
}
let groupIsOnlyStudents = group.every(isStudent); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
