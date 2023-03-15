/*
   This program should check if the array `group` contains only students
*/

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];

let groupIsOnlyStudents=false // complete this statement

for (let i=0;i<groupIsOnlyStudents.lenght;i++){
  if(!students.includes(group[i])){
    groupIsOnlyStudents=true;
    break;
  }
}
if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
