/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.

  HINT: string and array methods that could be helpful (indexOf, filter)
*/

// function getLanes(streetName) {
//   let newArray = [];
//   for (let street of streetName) {
//     if (street.endsWith("Lane")) {
//       newArray.push(street);
//     }
//   }
//   return newArray;
// }

function getLanes(streetName) {
  let street = streetName.filter((name) => name.indexOf("Lane") !== -1);
  return street;
}

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
