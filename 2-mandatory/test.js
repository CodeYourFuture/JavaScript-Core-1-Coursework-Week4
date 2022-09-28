function getEligibleStudents(arr) {
  let arrattended = [];
  arr.forEach((x) => {
    if (x[1] > 8) {
      arrattended.push(x[0]);
    }
  });
  return arrattended;
}
// function myfunction(x) {
//   arr = [];
//   if (x[1] > 8) {
//     arr.push(x[0]);
//   }
//   return arr;
// }

const attendance = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10],
];
// console.log(myfunction(["Ahmed", 40]));
console.log(getEligibleStudents(attendance));
