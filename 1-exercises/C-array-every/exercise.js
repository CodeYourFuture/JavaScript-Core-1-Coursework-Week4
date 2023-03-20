/*
   This program should check if the array `group` contains only students
*/

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"]; // , "Daniel"
// function see_student(g_student){
//   Boolean flag=false;
//   for(i in students){
//      if(g_student === students[i]){
//       flag = true;
//       console.log('true now');
//      }
//   }
// }
// const found = arr1.some(r=> arr2.includes(r)) indexOf(r) >= 0
let groupIsOnlyStudents = group.every((names) => students.includes(names)); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
