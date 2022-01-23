/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes
*/

// function getEligibleStudents(nameAndAttendance){
//   let newArr = [];
//   for(let i = 0; i < nameAndAttendance.length; i++){
//     if (nameAndAttendance[i][1] >= 8){
//       newArr.push(nameAndAttendance[i][0]);
//     } 
//   } return newArr;
// }

function getEligibleStudents(studentsNameAndAttendance) {
  return studentsNameAndAttendance.filter((nameAndAttendance) => 
  nameAndAttendance = nameAndAttendance[1] >= 8).map((name) => 
  name = name[0]);
}

/* ======= TESTS - DO NOT MODIFY ===== */

test("getEligibleStudents function works", () => {
  const attendance = [
    ["Ahmed", 8],
    ["Clement", 10],
    ["Elamin", 6],
    ["Adam", 7],
    ["Tayoa", 11],
    ["Nina", 10],
  ];
  expect(getEligibleStudents(attendance)).toEqual([
    "Ahmed",
    "Clement",
    "Tayoa",
    "Nina",
  ]);
});

test("getEligibleStudents function can return empty array", () => {
  const attendance = [["Jacob", 7]];
  expect(getEligibleStudents(attendance)).toEqual([]);
});
