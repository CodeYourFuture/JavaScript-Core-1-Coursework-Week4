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

function findSafeOxygenLevel(safe_fruit) {
  if (safe_fruit.every((fruit) => fruit === "pink")) {
    return "Bush is safe to eat from";
  } else {
    return "Toxic! Leave bush alone!";
  }
}

// console.log(findSafeOxygenLevel(["pink", "pink", "pink", "pink"]));

const voyagers = [
  "Adam family",
  "Potter family",
  "Eric",
  "Aldous",
  "Button family",
  "Jude",
  "Carmichael",
  "Bunny",
  "Asimov",
  "Oscar family",
  "Avery family",
  "Archer family",
  "Just A. family",
  "A Great family",
];

function getSettlers(settlers) {
  return settlers.filter((name) => name.match(/family/i));
}
console.log(getSettlers(voyagers));
