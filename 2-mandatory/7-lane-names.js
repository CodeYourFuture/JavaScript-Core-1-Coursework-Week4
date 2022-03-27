/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.

  HINT: string and array methods that could be helpful 

  indexOf() = method returns the first index at which a given element can be found in the array, or -1 if it is not present.

  filter() method creates a new array with all elements that pass the test implemented by the provided function.

  Logic: Only strings that contain 'Lane'  

  https://stackoverflow.com/questions/45522616/how-to-use-indexof-with-filter-in-javascript

  
*/

function getLanes(streetNames) {
  i = 0;
  lane = []; //an new array of streetNames
  while (i < streetNames.length) {
    if (streetNames[i].includes("Lane")) {
      lane.push(streetNames[i]);
    }
    i++;
  }
  return lane;
}
console.log(
  getLanes([
    "Abchurch Lane",
    "Adam's Court",
    "Addle Hill",
    "Addle Lane",
    "Alban Highwalk",
  ])
);

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
