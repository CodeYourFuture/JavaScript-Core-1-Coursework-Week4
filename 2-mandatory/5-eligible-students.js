/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of those who have attended AT LEAST 8 classes
*/

function studentsAttendedEnoughClasses(student) {
  return student[1] >= 8;
}

function removeClasses(student) {
  return student.slice(0, 1);
}

function getEligibleStudents(array) {
  let eligibleStudentsAndClasses = array.filter(studentsAttendedEnoughClasses);

  let eligibleStudentNames = eligibleStudentsAndClasses.map(removeClasses).flat();

  return eligibleStudentNames;
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
