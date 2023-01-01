/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes
*/

function getEligibleStudents(nameAndAttendance) {
  console.log(`nameAndAttendance: ${nameAndAttendance}`);
  const eligibleStudents = nameAndAttendance.filter((studentArray) => {
    console.log(`studentArray: ${studentArray}`);
    return studentArray[1] >= 8;
  });
  console.log(`eligibleStudents: ${eligibleStudents}`);
  const namesOfEligibleStudents = eligibleStudents.map((item) => item[0]);
  console.log(`namesOfEligibleStudents: ${namesOfEligibleStudents}`);
  return namesOfEligibleStudents;
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
