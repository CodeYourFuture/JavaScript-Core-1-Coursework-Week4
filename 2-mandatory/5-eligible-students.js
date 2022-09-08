/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes
*/

function getEligibleStudents(name, numberr) {
  let attendance = [];
  if (attendance.numberr > 7) {
    return `"${name}", `
  }
}
// function getEligibleStudents(attendance) {
//   const eligible = attendance.filter(fuction (value) => value < 7);
//   console.log(attendance);
// }
//   for (let index = 0; index < attendance.length; index++) {
//     if  (index.includes(Number < 7) === true) {
//       newArray = attendance.map([index])
//     }
//   }
// }
// let attendance = Number;
// function getEligibleStudents(Number) {
//   if (Number < 7);
//   return "";
// }

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
