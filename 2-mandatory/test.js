// function getEligibleStudents(arr) {
//   let arrattended = [];
//   arr.forEach((x) => {
//     if (x[1] >= 8) {
//       arrattended.push(x[0]);
//     }
//   });
//   return arrattended;
// }
// console.log(getTransportModes(["Angel", "tube", "bus"]));
// function getTransportModes(arr) {
//   arr.shift();
//   return arr;
// }
// let arr = ["tt", "yy"];
// let str = "tt";
// console.log(arr[0]);
function journeyPlanner(locations, transportMode) {
  let loca = [];
  for (let location of locations) {
    if (location.includes(transportMode)) {
      loca.push(location[0]);
    }
  }
  return loca;
  // Implement the function body
}
const londonLocations = [
  ["Angel", "tube", "bus"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
  ["Greenwich", "bus", "river boat"],
];

const streetNames = [
  "Abchurch Lane",
  "Adam's Court",
  "Addle Hill",
  "Addle Lane",
  "Alban Highwalk",
];
// console.log(streetNames.filter((Name) => Name.includes("Lane")));
function getLanes(arr) {
  const streetWithLane = arr.filter((Name) => Name.includes("Lane"));
  return streetWithLane;
}
// console.log(getLanes(streetNames));
PreviousPassword = [
  "fhD8!yrjj",
  "ttkTu.wer3",
  "dvyyeyY!5",
  "qwbfj76%",
  "tytT3729.",
];
for (let i = 0; i < PreviousPassword.length; i++) {
  console.log(PreviousPassword.slice(0, i).includes(PreviousPassword[i]));
}
