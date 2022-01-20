// function formatPercentage(array) {
//   return array.map((item) => {
//     if (item < 100) {
//       return Number(item.toFixed(2)) + "%";
//     } else {
//       return "100%";
//     }
//   });
// }

// console.log(formatPercentage([23, 18.103, 187.2, 0.372]));

// function remove(array, index) {
//   let newArray;
//   if (index > array.length) {
//     newArray = array;
//   } else {
//     newArray = array.slice(0, index).concat(array.slice(index + 1));
//   }
//   return newArray;
// }
// let initial = [1, 2, 3, 4, 5];
// remove(initial, 0);

// console.log(remove([1, 2, 3, 4, 5], 1));

// function sortArray(array) {
//   return [...array].sort();
// }
// const before = ["a", "n", "c", "e", "z", "f"];
// const copy = before.slice();
// sortArray(before);
// console.log(sortArray(before));

// function findSafeOxygenLevel(array) {
//   return array.filter((item) => {
//     let num = item.replace("%", "");
//     if (item.includes("%") && num > 19.5 && num < 23.5) {
//       return item + "%";
//     }
//   })[0];
// }

// console.log(findSafeOxygenLevel(["24.2%"]));

// function isBushSafe(berryArray) {
//   if (
//     berryArray.every((item) => {
//       return item === "pink";
//     })
//   ) {
//     return "Bush is safe to eat from";
//   } else {
//     return "Toxic! Leave bush alone!";
//   }
// }

// console.log(isBushSafe(["pink", "pink", "pink", "rf", "pink"]));

// function getEligibleStudents(array) {
//   return array.filter((item) => item[1] >= 8).map((item) => item[0]);
// }

/* ======= TESTS - DO NOT MODIFY ===== */

// function checkCodeIsThere(stringText) {
//   let magicWord = "code";
//   //edit code below
//   if (stringText.includes(magicWord)) {
//     return stringText.indexOf(magicWord);
//   } else {
//     return "Not found";
//   }
// }

// const string1 = "I Love coding and perfect  makes me happy";

// console.log(checkCodeIsThere(string1));

// function getLanes(string) {
//   return string.includes("lane");
// }
// function areStreetNames(names, func) {
//   return names.filter((item) => {
//     return func(item);
//   });
// }

// console.log(
//   areStreetNames([
//     "Abchurch Lane",
//     "Adam's Court",
//     "Addle Hill",
//     "Addle Lane",
//     "Alban Highwalk",
//   ]),
//   getLanes
// );

const londonLocations = [
  ["Angel", "tube", "bus"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
  ["Greenwich", "bus", "river boat"],
];
function getLocationName(array) {
  return array[0];
}

// console.log(getTransportModes(londonLocations));

// function isAccessibleByTransportMode(transArr, transStr) {
//   return transArr.includes(transStr);
// }

// console.log(isAccessibleByTransportMode(["tube", "bus", "river boat"], "boat"));

function journeyPlanner(locations, transportMode) {
  return locations
    .filter((item) => item.includes(transportMode))
    .map((item) => getLocationName(item));
}
console.log(journeyPlanner(londonLocations, "bus"));
