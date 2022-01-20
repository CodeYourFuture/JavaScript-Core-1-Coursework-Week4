/*
   This program should check if the array `group` contains only students
*/
let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];

//checking every element in students array
function onlyStudentElements(singlePersonInGroup) {
  return students.includes(singlePersonInGroup);
}

//checking if the array `group` contains only students
let groupIsOnlyStudents = group.every( onlyStudentElements); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
