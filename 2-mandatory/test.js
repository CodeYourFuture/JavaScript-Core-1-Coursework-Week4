// let arr = ["200%", "-21.5%", "20", "apes", "21.1%"];

// function a(arr) {
//   // write condition to check string with % and return an array
//   let validStrings = arr.filter((str) => str.includes("%"));
//   return validStrings.find((oxygenLevel) => {
//     oxygenLevel = parseFloat(oxygenLevel);

//     return (
//       oxygenLevel > parseFloat("19.5%") && oxygenLevel < parseFloat("23.5%")
//     );
//   });
// }

// function b(arr) {
//   // write condition to check string with % and return an array
//   // let validStrings = arr.filter((str) => str.includes("%"));
//   return arr
//     .filter((str) => str.includes("%"))
//     .find((oxygenLevel) => {
//       oxygenLevel = parseFloat(oxygenLevel);

//       return (
//         oxygenLevel > parseFloat("19.5%") && oxygenLevel < parseFloat("23.5%")
//       );
//     });
// }
// console.log(a(arr));
// console.log(b(arr));
// // isBushsafe
// arr = ["pink", "pink", "pink", "neon", "pink", "transparent"];
// arrSafe = ["pink", "pink", "pink", "pink"];
// function isBushSafe(berryArray) {
//   //Write your code here
// const unsafeBush = berryArray.every((berry) => berry === "pink");
// return unsafeBush ? `Bush is safe to eat from` : `Toxic! Leave bush alone!`;
// }
// console.log(isBushSafe(arr))
// console.log(isBushSafe(arrSafe))

// // Settlement
// const voyagers = [
//   "Adam family",
//   "Potter family",
//   "Eric",
//   "Aldous",
//   "Button family",
//   "Jude",
//   "Carmichael",
//   "Bunny",
//   "Asimov",
//   "Oscar family",
//   "Avery family",
//   "Archer family",
//   "Just A. family",
//   "A Great family",
// ];
// function getSettlers(arr) {
//   return arr.filter(familyName => familyName[0].includes('A') && familyName.includes('family'))
// }
// console.log(getSettlers(voyagers))
// //exam test

// const attendance = [
//   ["Ahmed", 8],
//   ["Clement", 10],
//   ["Elamin", 6],
//   ["Adam", 7],
//   ["Tayoa", 11],
//   ["Nina", 10],
// ];

// function eligibleForExam(arr) {
//   return arr.filter(value => value[1] >= 8 )
//             .map(student => student[0])

// }
// console.log(eligibleForExam(attendance))
// // string check
// const string1 = "I Love coding and perfect code makes me happy";
// const string2 = "I don't like to do coding";
// const string3 = "Can you scan the barcode for me";

// function checkCodeIsThere(stringText) {
//   let magicWord = "code";
//   //edit code below
//   if (stringText.includes(magicWord)) {
//     return stringText.indexOf(magicWord);
//   } else {
//     return "Not found";
//   }
// } console.log(checkCodeIsThere(string3))
// //transport mode
// const londonLocations = [
//   ["Angel", "tube", "bus"],
//   ["London Bridge", "tube", "river boat"],
//   ["Tower Bridge", "tube", "bus"],
//   ["Greenwich", "bus", "river boat"],
// ];
// function getTransportModes(arr) {
//   return arr.slice(1)
// }
// function isAccessibleByTransportMode(arr, mode) {
//   return arr.includes(mode);
// }
// console.log(getTransportModes(londonLocations))
// let result = isAccessibleByTransportMode('Angel', 'bus' )
// console.log(result)

// // journey planner
// function journeyPlanner(locations, transportMode) {
//   // Implement the function body
//   let planner = locations.filter((arr) =>
//     isAccessibleByTransportMode(arr, transportMode)
//   );
//   planner = planner.map((arr) => getLocationName(arr));
//   return planner;
// }


// lane names

const streetNames = [
    "Abchurch Lane",
    "Adam's Court",
    "Addle Hill",
    "Addle Lane",
    "Alban Highwalk",
  ];
function getLanes(arr) {
  return arr.filter(name => name.includes('Lane'))
} 

// password validator

const validPass = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"];
function validatePasswords(passwords) {
  
}
console.log(validatePasswords(validPass));

