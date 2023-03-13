/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.

  HINT: string and array methods that could be helpful (indexOf, filter)
*/

function containsLane(aStreet) {
  return aStreet.indexOf("Lane") > -1;
}

function getLanes(streetNames) {
  return streetNames.filter(containsLane);
}

/* ======= TESTS - DO NOT MODIFY ===== */

test.only("getLanes function works", () => {
  const streetNames = [
    "Abchurch Lane",
    "Adam's Court",
    "Addle Hill",
    "Addle Lane",
    "Alban Highwalk",
  ];

  expect(getLanes(streetNames)).toEqual(["Abchurch Lane", "Addle Lane"]);
});
