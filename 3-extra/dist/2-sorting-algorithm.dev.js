"use strict";

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

/*
function sortAges(arr) {
  return arr.filter((item) => typeof item === "number").sort((a, b) => a - b);
}

// HARD MODE

function sortArray(arr) {
  const sortedItems = [...arr];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const currentItem = sortedItems[j];
      const nextItem = sortedItems[j + 1];
      if (currentItem >= nextItem) {
        sortedItems[j] = nextItem;
        sortedItems[j + 1] = currentItem;
      }
    }
  }
  return sortedItems;
}

function sortAgesHardMode(arr) {
  console.log(
    "arr :",
    arr.filter((item) => typeof item === "number")
  );
  return sortArray(arr.filter((item) => typeof item === "number"));
}
*/
function sortAges(arr) {
  var filteredArr = [];
  arr.forEach(function (e) {
    if (typeof e === "number") {
      filteredArr.push(e);
    }
  });
  var done = false;

  while (!done) {
    done = true;

    for (var i = 1; i < filteredArr.length; i += 1) {
      if (filteredArr[i - 1] > filteredArr[i]) {
        done = false;
        var item = filteredArr[i - 1];
        console.log("item", item);
        filteredArr[i - 1] = filteredArr[i];
        console.log("filteredArr[i - 1]", filteredArr[i - 1]);
        filteredArr[i] = item;
        console.log("ilteredArr[i]", filteredArr[i]);
      }
    }
  }

  return filteredArr;
}
/* ======= TESTS - DO NOT MODIFY ===== */


var agesCase1 = ["🎹", 100, "💩", 55, "🥵", "🙈", 45, "🍕", "Sanyia", 66, "James", 23, "🎖", "Ismeal"];
var agesCase2 = ["28", 100, 60, 55, "75", "🍕", "Elamin"];
test("sortAges function works - case 1", function () {
  expect(sortAges(agesCase1)).toEqual([23, 45, 55, 66, 100]);
});
test("sortAges function works - case 2", function () {
  expect(sortAges(agesCase2)).toEqual([55, 60, 100]);
});