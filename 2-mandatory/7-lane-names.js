/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.

  HINT: string and array methods that could be helpful (indexOf, filter)
*/

function getLanes(streetNames) {
    return streetNames.filter((name) => {
    return typeof name === "string" && 
    name.includes("Lane");
  });
}

// function getSettlers(voyagers) {
//   return voyagers.filter((person) => {
//     return (
//       typeof person === "string" &&
//       person.startsWith("A") &&
//       person.endsWith("family")
//     );
//   });
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
