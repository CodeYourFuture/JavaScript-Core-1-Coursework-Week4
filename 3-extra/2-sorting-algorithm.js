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
//**********************************************************
//         *** Sort number array in an ascending order
//**********************************************************
function sortNumAscend(numArray) {
  let done = false;
  while (!done) {
     done = true;
     let temp = numArray[0];
     for (let i = 0; i < numArray.length; ++i) {
        if (numArray[i] > numArray[i + 1]) {
           done = false;
           temp = numArray[i];
           numArray[i] = numArray[i + 1];
           numArray[i + 1] = temp;
        }
     }
  }
  return numArray;
}
//************************************************************** */
function sortAges(myArray) {
  const integerNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let onlyNumArray =[];
  for (let i = 0; i < myArray.length; ++i) {
     if (typeof (myArray[i]) === "number") {
      onlyNumArray.push(myArray[i]);
     }
  }
  return sortNumAscend(onlyNumArray);
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
