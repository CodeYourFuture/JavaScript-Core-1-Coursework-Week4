/*
  The voyagers decide that they quite like this planet, and some of them want 
  to settle there and colonize it.

  They call the planet "Alpha" and they decide that the FAMILIES whose last
  names start with 'A' should stay, while the others go on in search of other 
  planets to call home.

  Create a function that returns an array of colonizers that will stay, 
  according to the above rules.

  NOTE: don't include any element that is not a "family".

  HINT: Whenever you read the above the instructions, try to come up with 
        the main input and output and logic
        Input: Is an array
        Output: Is an array
        Logic: Only strings that start with A, and finish with family
  
*/

function getSettlers(names) {
  // create an empty array to store the names of the settlers who will stay
  const settlers = [];

  // loop through the names array
  for (const name of names) {
  
    // check if the name is a family (ends with "family") and the last name starts with "A"
      if (name.endsWith("family") && name[0] === "A") {
  //or: if(name.startWith('A') && name.endsWith('family'));

      // add the name to the settlers array
      settlers.push(name);
    }
  }
  // return the array of settlers
  return settlers;
}
// Another solution:
//  function getSettlers(families){
//     return families.filter(family=>family.startsWith('A') && family.endsWith('family'));
//  }



/* ======= TESTS - DO NOT MODIFY ===== */

test("getSettlers function works", () => {
  const voyagers = [
    "Adam family",
    "Potter family",
    "Eric",
    "Aldous",
    "Button family",
    "Jude",
    "Carmichael",
    "Bunny",
    "Asimov",
    "Oscar family",
    "Avery family",
    "Archer family",
    "Just A. family",
    "A Great family",
  ];

  expect(getSettlers(voyagers)).toEqual([
    "Adam family",
    "Avery family",
    "Archer family",
    "A Great family",
  ]);
});
