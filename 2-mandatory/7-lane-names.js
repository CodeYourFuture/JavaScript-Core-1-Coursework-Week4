/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.

  HINT: string and array methods that could be helpful (indexOf, filter)
*/

function includesLane(street){
  return street.includes('Lane');
}

function getLanes(streetNames) {
 return streetNames.filter(includesLane);  
}


// function getLanes(streetNames) {
//   return streetNames.filter((street) => /Lane/g.test(street));
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
