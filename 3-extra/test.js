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

// const londonLocations = [
//   ["Angel", "tube", "bus"],
//   ["London Bridge", "tube", "river boat"],
//   ["Tower Bridge", "tube", "bus"],
//   ["Greenwich", "bus", "river boat"],
// ];

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
function cardValidator(passwords) {
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

// console.log(cardValidator(["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"])); // .toEqual([false, false, true, false, false]);

// console.log(cardValidator(["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"])); // .toEqual([true, true, false, false, false]);

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
- Takes an array of numbers as input.
- Returns an array of strings formatted as percentages (e.g. 10 => "10%").
- The numbers must be rounded to 2 decimal places.
- Numbers greater 100 must be replaced with 100.
*/

function formatPercentage(arr) {
  for (i in arr) {
    if (arr[i] > 99) {
      arr[i] = 100;
    }
  }
  return arr.map((num) => num.toFixed(2).replace(/\.?0+$/, "") + "%");
}

/* ======= TESTS - DO NOT MODIFY ===== */

// console.log("10        " + formatPercentage([23, 18.103, 187.2, 0.372])); //  .toEqual(["23%", "18.1%", "100%", "0.37%"]);

// console.log("  " + num.toFixed(2).replace(/\.?0+$/, ""));

const londonLocations = [
  ["Angel", "tube", "bus"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
  ["Greenwich", "bus", "river boat"],
];

function journeyPlanner(locations, transportMode) {
  const new_places = [];
  for (i in locations) {
    if (locations[i].includes(transportMode)) {
      new_places.push(locations[i][0]);
    }
  }
  console.log("   " + new_places);
}

// console.log(journeyPlanner(londonLocations, "river boat")); //  .toEqual(["London Bridge", "Greenwich"]);

//////////////////////

function isAccessibleByTransportMode(arr_mode, mode) {
  return arr_mode.some((element) => element.includes(mode));
}

// console.log(isAccessibleByTransportMode(["tube", "bus"], "tube")); //  .toEqual(true);
// console.log(isAccessibleByTransportMode(["tube", "bus"], "river boat")); // .toEqual(false);

// console.log(isAccessibleByTransportMode(["tube", "bus", "river boat"], "boat")); // ).toEqual(false);
// ////////////////////////////////

function first5(str) {
  return str.slice(0, 5);
}

const letters = ["z", "y", "x"];
const copyOfOriginal = letters.slice();
// console.log(first5(letters)); // .toEqual(["z", "y", "x"]);
// Make sure first5 didn't change its input array.
// expect(letters).toEqual(copyOfOriginal);

//
//

//   × sortArray function doesn't change the passed in array (5 ms)
//   × tidyUpString function works (1 ms)
//   √ formatPercentage function works (1 ms)
//
//
//

///////////////////////////////////////////////////////////
// function first5(str) {
//   return str.split(/\s+/).slice(0, 5).join(" ");
// }

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(arr) {
//   let largest = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i]) {
//       largest = arr[i];
//     }
//   }
//   return largest - 1;
// }

// console.log(solution([1, 3, 6, 4, 1, 2]));
////////////////////////////////////////////////

// function match(candidate, job) {
// is this job a valid match for the candidate?

//   let wiggleRoomSalary = candidate.minSalary * 0.9;

//   if (candidate.minSalary === undefined || job.maxSalary === undefined) {
//     throw new Error("");
//   } else {
//     if (wiggleRoomSalary <= job.maxSalary) {
//       return true;
//     } else if (candidate.minSalary < job.maxSalary) {
//       return false;
//     } else {
//       return console.error();
//     }
//   }
// }

// function matchh({ minSalary }, { maxSalary }) {
//   if (!minSalary || !maxSalary) throw new Error("");
//   return minSalary * 0.9 <= maxSalary;
// }

// candidate1 = { minSalary: 120000 };
// job1 = { maxSalary: 130000 };
// job2 = { maxSalary: 80000 };

// console.log(match(candidate1, job1)); // , true);
// console.log(match(candidate1, job2)); // , false);
////////////////////////////////////

function cardValidator(cardDigits) {
  // return containsNumbersOnly(cardDigits) && containsLowercaseLetter(cardDigits) && lastNumberEven(cardDigits) && cardDigits.length > 15 && sumAllNumberGreaterThen16(cardDigits);

  console.log("   test =  " + containsNumbersOnly(cardDigits));
}

// Returns true if it contains only number .
function containsNumbersOnly(number) {
  let diff = [];
  let array_num = String(number);

  for (let i = 0; i < array_num.length; i++) {
    // console.log(" includeaa   =  " + diff.includes(array_num[i]));
    // diff.push(array_num[i]);
    if (diff.includes(array_num[i])) {
      return true; //<-- break the loop
    } else {
      console.log("          " + diff);
      diff.push(array_num[i]);
    }
  }
  console.log("                 " + diff);
  // return false;
}
// function containsNumbersOnly(number) {
//   const nonUnique = (arr) => arr.some((x, i) => arr.includes(x, i + 1));
//   console.log("        unin unqe    " + nonUnique);
//   return nonUnique(number);
// }

// Returns true if all numbers are not same.
function allNumberNotSame(number) {
  return /(?!\1)/.test(number);
}

// Returns true if last number is even.
function lastNumberEven(number) {
  if (containsNumbersOnly(number)) {
    let lastNumber = String(number).slice(-1);
    return !(lastNumber % 2);
  }
  return false;
}

//

// console.log(cardValidator(["11111112347871111111"])); // .toEqual([false]);
// console.log(cardValidator(["9999777788880007"])); // .toEqual([true]);

// console.log(cardValidator(["555555555555555"])); // .toEqual([true]);
// console.log(cardValidator(["666666666666666"])); // .toEqual([true]);
// let num = "8237737327";
// console.log(num[num.length - 1]);
let message = "3333333333333333";
console.log(message.split("")); // returns ["I am a Happy Go lucky Guy"]
