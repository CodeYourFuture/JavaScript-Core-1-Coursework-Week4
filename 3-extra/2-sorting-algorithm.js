/*
At the start of the course, you worked in teams to sort your team members, labelled by
numbers, in ascending or descending order.

Today, you will be applying the sorting algorithm you used in that exercise in code! 

Create a function called sortAges which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted ages in ascending order 
  - HARD MODE - without using the built-in javascript sort method 😎

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/
function sortAges(arr) {
  let validAges = [];
  arr.forEach((val) => (typeof val === "number" ? validAges.push(val) : null));
  return validAges.sort((a, b) => a - b);
}

// function sortAges(arr) {
//   const ages = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       ages.push(arr[i]);
//     }
//   }
//   for (let i = 0; i < ages.length; i++) {
//     for (let j = i + 1; j < ages.length; j++) {
//       if (ages[j] < ages[i]) {
//         const temp = ages[i];
//         ages[i] = ages[j];
//         ages[j] = temp;
//       }
//     }
//   }
//   return ages;
// }
function sortAges(arr) {
  const ages = [];
  arr.forEach((element) => {
    if (typeof element === "number") {
      ages.push(element);
    }
  });
  let i = 0;
  let j = 1;
  let temp;
  for (i = 0; i < ages.length; i++) {
    for (j = 1; j < ages.length; j++) {
      if (ages[j - 1] > ages[j]) {
        temp = ages[j - 1];
        ages[j - 1] = ages[j];
        ages[j] = temp;
      }
    }
  }
  return ages;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const agesCase1 = [
  "🎹",
  100,
  "💩",
  55,
  "🥵",
  "🙈",
  45,
  "🍕",
  "Sanyia",
  66,
  "James",
  23,
  "🎖",
  "Ismeal",
];
const agesCase2 = ["28", 100, 60, 55, "75", "🍕", "Elamin"];

test("sortAges function works - case 1", () => {
  expect(sortAges(agesCase1)).toEqual([23, 45, 55, 66, 100]);
});

test("sortAges function works - case 2", () => {
  expect(sortAges(agesCase2)).toEqual([55, 60, 100]);
});
