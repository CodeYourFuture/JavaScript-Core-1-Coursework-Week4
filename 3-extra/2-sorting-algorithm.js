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

Gnome sort is a sorting algorithm which is similar to Insertion sort, except that moving an element to its proper place is accomplished 
by a series of swaps, as in Bubble Sort.

The pseudocode for the algorithm is:

procedure gnomeSort(a[]):
    pos := 0
    while pos < length(a):
        if (pos == 0 or a[pos] >= a[pos-1]):
            pos := pos + 1
        else:
            swap a[pos] and a[pos-1]
            pos := pos - 1
 
 http://en.wikipedia.org/wiki/Gnome_sort   

*/

function gnomeSort(array)  {
    let pos = 0, temp;
    while (pos < array.length)
    {
        if (pos === 0 || array[pos] >= array[pos-1])
            ++pos
        else
        {
            temp = array[pos];
            array[pos] = array[pos - 1];
            array[pos - 1] = temp;
            --pos;
        }
      }

      return array
}

function sortAges(arr) { 
       let numberArray = [];
       for (let i = 0; i< arr.length; i++) {
            if (Number.isFinite(arr[i]))
                  numberArray.push(arr[i])
       }

       return gnomeSort(numberArray);
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
