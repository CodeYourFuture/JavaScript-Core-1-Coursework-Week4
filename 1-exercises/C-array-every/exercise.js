/*
   This program should check if the array `group` contains only students
*/

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];

function checkingIfEverythingIsThere(smallArray, largeArray){
  return smallArray.every(name => largeArray.includes(name));
}

// complete this statement
let groupIsOnlyStudents = checkingIfEverythingIsThere(group, students);

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
