function first5(arr) {
  return arr.slice(0, 5);
}
function sortArray(arr) {
  let arr1 = arr.sort();
  return arr1;
}
function tidyUpString(arr) {
  let arrone = [];
  arr.forEach((x) => arrone.push(x.trim().toLowerCase().replace("/", "")));
  return arrone;
}
function remove(arr, index) {
  let startindex = index;
  let removedNum = 1;
  let arrr = arr.splice(startindex, removedNum);
  return arrr;
}
function formatPercentage(arr) {
  let arrone = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 100) {
      return arrone.push(arr[i].toFixed(2));
    } else {
      return arrone.push("100%");
    }
  }
  return arrone;
}
const arr = [1, 2, 6.66, 300, 6];
// console.log(formatPercentage(arr));
function findSafeOxygenLevel(arr) {
  return arr.find((item) => {
    return (
      Number(item.replace("%", "")) > 19.5 &&
      Number(item.replace("%", "")) < 23.5
    );
  });
}
console.log(
  findSafeOxygenLevel(["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"])
);
const numbers = [
  "/Daniel",
  " /Sanyia",
  "AnTHonY",
  "irina",
  " Gordon",
  "ashleigh   ",
  "   Alastair  ",
  " anne marie  ",
];
console.log(tidyUpString(numbers));
