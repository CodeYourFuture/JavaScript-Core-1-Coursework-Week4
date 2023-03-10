// function tidyUpString(str) {
//   return str.map((word) => word.replace(/\s+/g, "").replace(/\//g, "").toLowerCase());
// }

//TO CALL THIS FUNCTION
// var fullStr = "We can get first 10 words form this string using the above function";
// var finalStr = getWordStr(fullStr);

// console.log(finalStr);

// console.log(tidyUpString(["/Daniel", " /Sanyia", "AnTHonY", "irina", " Gordon", "ashleigh   ", "   Alastair  ", " anne marie  "]));

// function remove(arr) {
//   arr.splice(4, 1);
//   return arr;
//   //   return arr[0].remove();
// }

// console.log(remove([1, 2, 3, 4, 5, 6, 7, 8]));
// const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const index = myArray.indexOf(5);

// const x = myArray.splice(6, 1);

// console.log(`myArray values: ${myArray}`);
// console.log(`variable x value: ${x}`);

// function findSafeOxygenLevel(safe_fruit) {
//   if (safe_fruit.every((fruit) => fruit === "pink")) {
//     return "Bush is safe to eat from";
//   } else {
//     return "Toxic! Leave bush alone!";
//   }
// }

// // console.log(findSafeOxygenLevel(["pink", "pink", "pink", "pink"]));

// const attendance = [
//   ["Ahmed", 8],
//   ["Clement", 10],
//   ["Elamin", 6],
//   ["Adam", 7],
//   ["Tayoa", 11],
//   ["Nina", 10],
// ];

function getSettlers(students) {
  return students.filter((marks) => marks[1] > 7).map((name) => name[0]);
}
// console.log(getSettlers(attendance));

function checkCodeIsThere(stringText) {
  if (stringText.includes("code")) {
    return stringText.indexOf("code");
  } else {
    return "Not found";
  }
}

// const string1 = "I Love coding and perfect code makes me happy";

// // console.log(checkCodeIsThere(string1));

// console.log(string1.includes("code"));

const londonLocations = [
  ["Angel", "tube", "bus"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
  ["Greenwich", "bus", "river boat"],
];

// console.log(journeyPlanner(londonLocations));

function getTransportModes(arr) {
  const mode = [];
  for (let i = 1; i < arr.length; i++) {
    console.log(" mode " + arr[i]);
    mode.push(arr[i]);
  }
  return mode;
}
//
// console.log(getTransportModes(["Angel", "tube", "bus"])); //  .toEqual(["tube", "bus"]);
//
// getTransportModes(["Angel", "tube", "bus"]); //  .toEqual(["tube", "bus"]);
//
function isAccessibleByTransportMode(arr_mode, mode) {
  return arr_mode.some((element) => element.includes(mode));
}
function getLocationName(arr) {
  return arr[0];
}

// console.log(getLocationName(["Angel", "tube", "bus"])); //  .toEqual(["tube", "bus"]);

// const deciduous = ["birch", "maple", "oak"];

// const evergreens = [
//   { name: "cedar", count: 2 },
//   { name: "fir", count: 6 },
//   { name: "pine", count: 3 },
// ];

// // our testing function
// let hasFiveOrMore = "oak";

// console.log(deciduous.some((a) => a.includes(hasFiveOrMore)));
// { name: "maple", count: 5 }

// console.log(evergreens.find("oak"));
// { name: "fir", count: 6 }
function journeyPlanner(locations) {
  const arr = new Array(locations);
  for (i in arr) {
    console.log("    local    " + arr);
  }
}

// console.log(journeyPlanner(londonLocations, "river boat")); //  .toEqual(["London Bridge", "Greenwich"]);

const streetNames = ["Abchurch Lane", "Adam's Court", "Addle Hill", "Addle Lane", "Alban Highwalk"];

function getLanes(st_name) {
  return st_name.filter((names) => names.includes("Lane"));
}

// console.log(getLanes(streetNames)); //   .toEqual(["Abchurch Lane", "Addle Lane"]);

//
//
//

/*

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

*/
function validatePasswords(passwords) {
  return passwords.map(
    (password, index) =>
      passwords.indexOf(password) === index &&
      containsNumber(password) &&
      containsLowercaseLetter(password) &&
      containsSymbol(password) &&
      password.length > 4 &&
      containsUppercaseLetter(password)
  );
}

// Returns true if string contains at least one uppercase letter.
function lengthLongerThenFive(string) {
  return string.length;
}

// Returns true if string contains at least one uppercase letter.
function containsUppercaseLetter(string) {
  return /[A-Z]/.test(string);
}

// Returns true if string contains at least one lowercase letter.
function containsLowercaseLetter(string) {
  return /[a-z]/.test(string);
}

// Returns true if string contains at least one number.
function containsNumber(string) {
  return /[0-9]/.test(string);
}

// Returns true if string contains at least one symbol.
function containsSymbol(string) {
  return /[!#$%.*&]/.test(string);
}

/* ======= TESTS - DO NOT MODIFY ===== */

// console.log(validatePasswords(["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"])); // .toEqual([false, false, true, false, false]);

// console.log(validatePasswords(["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"])); // .toEqual([true, true, false, false, false]);

////////////////////////////

function isBushSafe(berryArray) {
  if (berryArray.every((fruit) => fruit === "pink")) {
    return "Bush is safe to eat from";
  } else {
    return "Toxic! Leave bush alone!";
  }
}

/* ======= TESTS - DO NOT MODIFY ===== */

// console.log(isBushSafe(["pink", "pink", "pink", "neon", "pink", "transparent"])); //  .toEqual("Toxic! Leave bush alone!");

// console.log(isBushSafe(["pink", "pink", "pink", "pink"])); // .toEqual("Bush is safe to eat from");

///////////////////////////
/*
Write a function that:
- Accepts an array as a parameter.
- Returns a new array containing the first five elements of the passed array.
*/
function first5(str) {
  return str.slice(0, 5);
}

/*
Write a function that:
- Accepts an array as a parameter.
- Returns a new array containing the same elements, except sorted.
*/
function sortArray(str) {
  return str.sort();
}

/*
NOTE: This exercise is the same as one you did last week - try to do it again using things you learnt this week.
Think about what is better about this solution than your one last week, and what is worse.

Write a function that:
- Takes an array of strings as input.
- Removes any spaces in the beginning or end each string.
- Removes any forward slashes (/) in the strings.
- Makes the strings all lowercase.
*/
function tidyUpString() {
  return str.map((word) => word.replace(/\s+/g, "").replace(/\//g, "").toLowerCase());
}

/*
Write a function that:
- Takes an array and an index as input.
- Returns a new array containing the same elements, but without the element at the passed index.
*/

function remove(arr, a) {
  arr.splice(a, 1);
  return arr;
}

/*
Write a function that:
- Takes an array of numbers as input.
- Returns an array of strings formatted as percentages (e.g. 10 => "10%").
- The numbers must be rounded to 2 decimal places.
- Numbers greater 100 must be replaced with 100.
*/

function formatPercentage() {}

/* ======= TESTS - DO NOT MODIFY ===== */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const copyOfOriginal = numbers.slice();
console.log(first5(numbers)); //  .toEqual([1, 2, 3, 4, 5]);

console.log(copyOfOriginal);

const letters = ["z", "y", "x"];
console.log(first5(letters)); // .toEqual(["z", "y", "x"]);

console.log(sortArray(["a", "n", "c", "e", "z", "f"])); //  .toEqual(["a", "c", "e", "f", "n", "z"]);

// test("sortArray function doesn't change the passed in array", () => {
//   const before = ["a", "n", "c", "e", "z", "f"];
//   const copy = before.slice();
//   sortArray(before);
//   expect(before).toEqual(copy);
// });

console.log(tidyUpString(["/Daniel", " /Sanyia", "AnTHonY", "irina", " Gordon", "ashleigh   ", "   Alastair  ", " anne marie  "]));

// .toEqual([
//   "daniel",
//   "sanyia",
//   "anthony",
//   "irina",
//   "gordon",
//   "ashleigh",
//   "alastair",
//   "anne marie",
// ]);

console.log(remove([1, 2, 3], 0)); // .toEqual([2, 3]);

console.log(remove([1, 2, 3, 4, 5], 2)); //  .toEqual([1, 2, 4, 5]);

console.log(remove([1, 2, 3, 4, 5], 4)); // .toEqual([1, 2, 3, 4]);

console.log(remove(["hi"], 0)); // .toEqual([]);

console.log(remove(["hi"], 10)); // .toEqual(["hi"]);

console.log(initial); // .toEqual([1, 2, 3]);

console.log(formatPercentage([23, 18.103, 187.2, 0.372])); //  .toEqual(["23%", "18.1%", "100%", "0.37%"]);
