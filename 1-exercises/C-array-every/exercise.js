/*
   This program should check if the array `group` contains only students
*/

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];

let groupIsOnlyStudents = group.every(function group(names){
   if (students === group){
     return names=true;
  } else {
      return names =false;
  };
}); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}
console.log(groupIsOnlyStudents);
/* EXPECTED RESULT */

// The group does not contain only students
