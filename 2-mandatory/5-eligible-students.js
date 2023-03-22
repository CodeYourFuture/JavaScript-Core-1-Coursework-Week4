/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of those who have attended AT LEAST 8 classes
*/

// helper function #1
function studentsAttendedEnoughClasses(student) {
  // This says - info at index [1] needs to be more or equal to 8
  return student[1] >= 8;
}

// helper function #2
function removeClasses(student) {
  // return array from index [0] but not including index [1]
  // original array is unchanged
  return student.slice(0, 1);
}

// Main Function
function getEligibleStudents(array) {
  // filter to display student data of those with 8 or more classes
  let eligibleStudentsAndClasses = array.filter(studentsAttendedEnoughClasses);

  // remove classes with map
  // flat() to remove nested arrays
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
