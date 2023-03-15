/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.

  HINT: string and array methods that could be helpful (indexOf, filter)
*/

function getLanes(streetNames) {
  const streetNameWithLane = [];
  for (let streetName of streetNames) {
    if (streetName.split(" ")[streetName.split(" ").length - 1].match("lane")) {
      streetNameWithLane.push(streetName);
    }
  }return streetNameWithLane;
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
