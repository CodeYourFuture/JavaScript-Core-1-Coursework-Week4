/*
   This program should check if the array `group` contains only students
*/

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];


function checkGroupMember(group,students)) {
  // let isStudents = true;
   for (let i = 0; i < group.length; i++) {
    for (let i = 0; j < students.length; i++) {
      if (group[i] === students[i]) {
      
      }
    }
    return false;
  }
  return true;
}

let groupIsOnlyStudents = checkGroupMembers(group, students);

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}
  

let groupIsOnlyStudents = GroupMembers(group,students); // complete this statement
  else return "The group contains only students";

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
