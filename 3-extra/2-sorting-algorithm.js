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

const sortArray = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const x = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > x) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = x;
  }
  return arr;
};

const sortAges = (arr) => {
  const newArr = [];
  arr.forEach((e) => {
    if (typeof e === "number") newArr.push(e);
  });
  return sortArray(newArr);
};

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
