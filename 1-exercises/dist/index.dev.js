"use strict";

// function formatPercentage(array) {
//   return array.map((item) => {
//     if (item < 100) {
//       return Number(item.toFixed(2)) + "%";
//     } else {
//       return "100%";
//     }
//   });
// }
// console.log(formatPercentage([23, 18.103, 187.2, 0.372]));
function remove(array, index) {
  if (index > array.length) {
    array;
  } else {
    array.splice(array[index] - 1, 1);
  }

  return array;
}

var initial = [1, 2, 3];
remove(initial, 0);
console.log(initial);