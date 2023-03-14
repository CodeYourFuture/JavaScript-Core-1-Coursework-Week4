/*
   This program should check if the array `group` contains only students
*/

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];

function containsStudent (groupWithStudents){
  for (let name of groupWithStudents){
    if(group.includes(students)){
return true;
    } else{
      return false;
    }

  }

}

let groupIsOnlyStudents = students.every(containsStudent);

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
