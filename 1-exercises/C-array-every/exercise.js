/*
   This program should check if the array `group` contains only students
*/

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];

// let studentCheck = (name) => students.includes(name) ? true : false;

function studentCheck(studentName){
//  console.log(studentName);
 if(students.includes(studentName)){
   return true;
 }
}

let groupIsOnlyStudents = group.every(studentCheck); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
