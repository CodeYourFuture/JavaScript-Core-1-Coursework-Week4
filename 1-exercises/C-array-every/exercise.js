/*
   This program should check if the array `group` contains only students
*/

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];

let groupIsOnlyStudents = group.every(element => students.includes(element)); // complete this statement
if(groupIsOnlyStudents)

  {console.log('The group is contains only students')
}else
{console.log('The group does not contain only students')}



/* EXPECTED RESULT */

/* EXPECTED RESULT */

// The group does not contain only students
