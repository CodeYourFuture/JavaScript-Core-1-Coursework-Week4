


// function getSettlers(families) {
//   const settlers = families.filter((n) => n.includes("family") && n[0] === "A");
//   return settlers;
// }

//   const voyagers = [
//     "Adam family",
//     "Potter family",
//     "Eric",
//     "Aldous",
//     "Button family",
//     "Jude",
//     "Carmichael",
//     "Bunny",
//     "Asimov",
//     "Oscar family",
//     "Avery family",
//     "Archer family",
//     "Just A. family",
//     "A Great family",
//   ];

//   console.log(getSettlers(voyagers));

//-----------------------------

// function isBushSafe(berryArray) {
//     safeBerry = "pink";
//     if (berryArray.every((e) => e === safeBerry)) {
//         return "Bush is safe to eat from";
//     } else {
//         return "Toxic! Leave bush alone!";
//     }
// }

// arr = ["pink", "pink", "pink", "neon", "pink", "transparent"];
// console.log(isBushSafe(arr));

// function findSafeOxygenLevel(oxygenLevels) {
//   let oxygenLevel = oxygenLevels
//     .filter((e) => /^\d/.test(e))
//     .filter((e) => /%$/.test(e))
//     .map((e) => e.replace("%", ""))
//     .find((n) => n > 19.5 && n < 23.5)
//     .toString()
//     .concat("%");
//   return oxygenLevel;
// }
// let arr = ["200%", "-21.5%", "20", "apes", "21.1%"];

// console.log(findSafeOxygenLevel(arr));

//------------------------

// // let arr = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];

// function findSafeOxygenLevel(oxygenLevels) {
// //   //   return oxygenLevels.filter(oxygenLevel => /^[0-9]%/g.test(oxygenLevel));
// //   let numbers = oxygenLevels.filter((oxygenLevel) => /^\d/.test(oxygenLevel));
// //   let percents = numbers.filter(o => /%$/.test(o));
// //     let doubleNumber = percents.map(n => Number(n.replace(/[^0-9\.]+/g, "")));
// //   // return percents;
// //   return doubleNumber;

// // //   let doubleNumber = Number(.replace(/[0-9\.]+/g, ""));
// // //   return doubleNumber;

// let oxygenLevel = oxygenLevels
//   .filter((e) => /^\d\%$/g.test(e))
//   .map((n) => n.replace("%", ""))
//   //   .map((n) => Number(n.replace(/^[^0-9\.]+/g, "")))
//   .find((n) => n > 19.5 && n < 23.5)
// //   .toString()
// //   .concat("%");
// return oxygenLevel;
// }

// let arr = ["200%", "-21.5%", "20", "apes", "21.1%"];

// console.log(findSafeOxygenLevel(arr));

//-------------------

// .filter(oxygenLevel => oxygenLevel.includes(/\d/ && "%"));

// function formatPercentage(arr) {
//   return arr.map((e) => e.toFixed(2).concat("%"));
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(formatPercentage(arr));

// function remove(arr, i) {
//   return arr.filter((e) => e != arr[i]);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(remove(arr, 6));

// function first5(arr) {
//     let i = 0;
//   return arr.slice(0, 5);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(first5(arr));

// function tidyUpString(arr) {
//   return arr.map((e) => e.trim().replaceAll("/", "").toLowerCase());
// }

// let arr = [" Fsd/fg", "fgh", "df/g ", "Fgh", "sd", "Fuhhs", " Sjdyg"];

// console.log(tidyUpString(arr));
