function getEligibleStudents(studentArray) {
  let eligibleStudent=[];
for (element of studentArray )
  {
    if (element[1]>= 8 )
      {
       eligibleStudent.push(element[0])
      }
  }
return eligibleStudent;
}

let attendance = [
    ["Ahmed", 8],
    ["Clement", 10],
    ["Elamin", 6],
    ["Adam", 7],
    ["Tayoa", 11],
    ["Nina", 10],
  ];


  console.log(getEligibleStudents(attendance))