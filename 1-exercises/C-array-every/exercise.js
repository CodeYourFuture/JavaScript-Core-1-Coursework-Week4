/*
   This program should check if the array `group` contains only students
*/

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];


const isAllGroupMembersStudents = (groupMember) => {
  return students.includes(groupMember);
}; 

let groupIsOnlyStudents = group.every(isAllGroupMembersStudents)// complete this statement


if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
