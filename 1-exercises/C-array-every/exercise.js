/*
   This program should check if the array `group` contains only students
*/

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];

// let groupIsOnlyStudents = group.every((name) => students.includes(name));

let groupIsOnlyStudents = group.every((name) => {
  return students.includes(name) ? true : false;
});

// let groupIsOnlyStudents = group.filter((name) => students.includes(name)); // expected true
// console.log(groupIsOnlyStudents);

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */
// The group does not contain only students
