/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes
*/
const attendance = [
  ["Ahmed", 6],
  ["Clement", 5],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 1],
  ["Nina", 1],
];
function getEligibleStudents(attendanceArray) {
  let eligibleStudents = attendanceArray
    .filter((a) => a[1] >= 8)
    .map((x) => x[0]);

  return eligibleStudents;
}
console.log(getEligibleStudents(attendance));
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
