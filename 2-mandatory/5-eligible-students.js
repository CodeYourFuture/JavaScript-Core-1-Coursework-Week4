/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes
*/
function onlyNames(nameClassesPair) {
  return nameClassesPair[0];
}


function isEligible(student) {
  return student[1]>7;
};

function getEligibleStudents(studentAttendance) {
  let sitInExam = studentAttendance.filter(isEligible);
  let examNames = sitInExam.map(onlyNames);
  return examNames;
};

// using arrow function
// function getEligibleStudents(students, attendance) {
//   let studentName = students.filter(attendance=>attendance[1]>=8)
//   return studentName.map(names=>names[0]);
// };










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
