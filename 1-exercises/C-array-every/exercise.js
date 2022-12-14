/*
   This program should check if the array `group` contains only students
*/

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];
let hih = [1, 2, 3];

function isIncluded(studentNames) {
  for (studentName of studentNames) {
    return students.includes(studentName);
  }
  
}

let groupIsOnlyStudents = group.every(isIncluded); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students

//don't understand how it works but it works :)