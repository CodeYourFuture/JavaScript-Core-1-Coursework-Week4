function getEligibleStudents(attendance) {
  function isAccepted(studentAtt) {
    return studentAtt[1] >= 8;
  }

  let AcceptedStudents = attendance.filter(isAccepted);
  return AcceptedStudents.map((student) => student[0]);
}

// console.log(attendance.keys);
//    let AcceptedStudents = attendance.

/* ======= TESTS - DO NOT MODIFY ===== */

const attendance = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10],
];

console.log(getEligibleStudents(attendance));
//   ([
//     "Ahmed",
//     "Clement",
//     "Tayoa",
//     "Nina",
//   ]);
// });

const attendance2 = [["Jacob", 7]];
console.log(getEligibleStudents(attendance2));
