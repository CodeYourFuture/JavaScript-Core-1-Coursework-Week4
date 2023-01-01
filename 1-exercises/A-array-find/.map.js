var test1 = [1, 2, 3, 4, 5];

let people = [1, 3, 5, 3];
function double(array) {
  // Use array.map() to return a new array with each value twice
  // as large as the corresponding value in the passed in array.
  let mappedArray = array.map((x) => x * 2);
  console.log(mappedArray);
}

//console.log(double(people));
//console.log(people);
const test = ["Angel", "tube", "bus"];

// function getTransportModes(locationAndTransport) {
//   let transportModes = locationAndTransport.filter(
//     (index) => locationAndTransport.indexOf(index) > 0
//   );
//   console.log(`transportModes: ${transportModes}`);
//   return transportModes;
// }

const londonLocations = [
  ["Angel", "tube", "bus"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
  ["Greenwich", "bus", "river boat"],
];

function journeyPlanner(locations, transportMode) {
  // Implement the function body
  let newArray = locations.filter((arr) => arr.includes(transportMode));
  console.log(newArray);
  return newArray;
}

console.log(journeyPlanner(londonLocations, "river boat"));
