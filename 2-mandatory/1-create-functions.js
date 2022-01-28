/*
Write a function that:
- Accepts an array as a parameter.
- Returns a new array containing the first five elements of the passed array.
*/
// make a new array of the first five
function first5(arr) {
  let arrFirstFive = [];
  i = 0;
  while (i < arr.length && i < 5) {
    // stop at the end of the arrray or at the 5th element
    arrFirstFive.push(arr[i++]); //++i ?
  }
  return arrFirstFive;
}
console.log(first5([2, 1, 4, 6, 7, 8, 9, 0, 5]));

/*
Write a function that:
- Accepts an array as a parameter.
- Returns a new array containing the same elements, except sorted.
*/
//Option 1 .sort() is a fuction that does the sorting
// function sortArray(arr1) {
//   let arrSorted = arr1;
//   return arrSorted.sort();
// }
// console.log(sortArray([2, 1, 4, 6, 7, 8, 9, 0, 5]));

// Option 2
// swaps element in an array by comparision of consecutive elements
function sortArray(arr1) {
  let sortedArr = false;
  let arr = arr1;
  while (!sortedArr) {
    sortedArr = true; //assuming the array is sorted
    for (i = 0; i < arr.length - 1; i++) {
      // arr.length -1 is the number of paired comparrisions to be made in any array length except the last element
      if (arr[i] > arr[i + 1]) {
        // current one is greater that the next - assending order
        temp = arr[i]; // temp varialbe which is aplace holder space for swapping elements
        arr[i] = arr[i + 1]; // this moves the second eleent in the comparison to the first location
        arr[i + 1] = temp; // moving temp into the second location
        sortedArr = false;
      }
    }
  }
  return arr;
}
console.log(sortArray([2, 1, 4, 6, 7, 8, 9, 0, 5]));

/*
NOTE: This exercise is the same as one you did last week - try to do it again using things you learnt this week.
Think about what is better about this solution than your one last week, and what is worse.

Write a function that:
- Takes an array of strings as input.
- Removes any spaces in the beginning or end each string.
- Removes any forward slashes (/) in the strings.
- Makes the strings all lowercase.
*/
function tidyUpString(x) {
  for (i = 0; i < x.length; i++) {
    x[i] = x[i].trim(); // make a trimmed copy of the element
    x[i] = x[i].replace(`/`, ``); // find and replace
    x[i] = x[i].toLowerCase(); // convert to lower case
  }
  return x;
}
console.log(tidyUpString([`jude `, `ben`, `/`, `Georgie`]));

/*
Write a function that:
- Takes an array and an index as input.
- Returns a new array conetaining the same elements, but without the element at the passed index.
*/

function remove(x, y) {
  // x the array, y is the index
  x.splice(y, 1);
  return x;
}
console.log(remove([`jude `, `ben`, `/`, `Georgie`], 2));
/*
Write a function that:
- Takes an array of numbers as input.
- Returns an array of strings formatted as percentages (e.g. 10 => "10%").
- The numbers must be rounded to 2 decimal places.
- Numbers greater 100 must be replaced with 100.
*/

function formatPercentage(arr) {
  // let percent = [];
  for (i = 0; i < arr.length; i++) {
    num = arr[i];
    num = num.toFixed(2) + `%`;
    arr[i] = num;
  }
  return arr;
}

console.log(formatPercentage([2, 1, 4, 6, 7, 8, 9, 0, 5]));

/* ======= TESTS - DO NOT MODIFY ===== */

test("first5 function works for more than five elements", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const copyOfOriginal = numbers.slice();
  expect(first5(numbers)).toEqual([1, 2, 3, 4, 5]);
  // Make sure first5 didn't change its input array.
  expect(numbers).toEqual(copyOfOriginal);
});

test("first5 function returns a a smaller array for fewer than five elements", () => {
  const letters = ["z", "y", "x"];
  const copyOfOriginal = letters.slice();
  expect(first5(letters)).toEqual(["z", "y", "x"]);
  // Make sure first5 didn't change its input array.
  expect(letters).toEqual(copyOfOriginal);
});

test("sortArray function returns a sorted version of the array", () => {
  expect(sortArray(["a", "n", "c", "e", "z", "f"])).toEqual([
    "a",
    "c",
    "e",
    "f",
    "n",
    "z",
  ]);
});

test("sortArray function doesn't change the passed in array", () => {
  const before = ["a", "n", "c", "e", "z", "f"];
  const copy = before.slice();
  sortArray(before);
  expect(before).toEqual(copy);
});

test("tidyUpString function works", () => {
  expect(
    tidyUpString([
      "/Daniel",
      " /Sanyia",
      "AnTHonY",
      "irina",
      " Gordon",
      "ashleigh   ",
      "   Alastair  ",
      " anne marie  ",
    ])
  ).toEqual([
    "daniel",
    "sanyia",
    "anthony",
    "irina",
    "gordon",
    "ashleigh",
    "alastair",
    "anne marie",
  ]);
});

describe("remove function", () => {
  test("removes index 0", () => {
    expect(remove([1, 2, 3], 0)).toEqual([2, 3]);
  });

  test("removes middle index", () => {
    expect(remove([1, 2, 3, 4, 5], 2)).toEqual([1, 2, 4, 5]);
  });

  test("removes end index", () => {
    expect(remove([1, 2, 3, 4, 5], 4)).toEqual([1, 2, 3, 4]);
  });

  test("removes only index", () => {
    expect(remove(["hi"], 0)).toEqual([]);
  });

  test("ignores missing index", () => {
    expect(remove(["hi"], 10)).toEqual(["hi"]);
  });

  test("doesn't modify input array", () => {
    let initial = [1, 2, 3];
    remove(initial, 1);
    expect(initial).toEqual([1, 2, 3]);
  });
});

test("formatPercentage function works", () => {
  expect(formatPercentage([23, 18.103, 187.2, 0.372])).toEqual([
    "23%",
    "18.1%",
    "100%",
    "0.37%",
  ]);
});
