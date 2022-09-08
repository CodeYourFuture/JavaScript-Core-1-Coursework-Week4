/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.

  HINT: string and array methods that could be helpful (indexOf, filter)
*/

// let streetNames = [];
function getLanes(streetNames) {
  if (streetNames.includes("Lane") == true) {
  return streetNames;
  }
}
// streetNames.forEach(getLanes);
// function getLanes(streetNames) {
//   if (streetNames = "Lane") {
//   return streetNames.indexOf("Lane");
//   }
// }
// function getLanes(streetNames) {
//   if (streetNames.indexOf("Lane", 0)) {
//   return streetNames;
//   }
// }
// function getLanes(streetNames) {
//   if (streetNames.includes("Lane") = true) {
//   return streetNames;
//   }
// }

/* ======= TESTS - DO NOT MODIFY ===== */

test("getLanes function works", () => {
  const streetNames = [
    "Abchurch Lane",
    "Adam's Court",
    "Addle Hill",
    "Addle Lane",
    "Alban Highwalk",
  ];

  expect(getLanes(streetNames)).toEqual(["Abchurch Lane", "Addle Lane"]);
});
