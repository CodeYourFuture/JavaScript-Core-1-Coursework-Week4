/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.

  HINT: string and array methods that could be helpful (indexOf, filter)
*/

// function listOfStreetNames(streetName){
//   if(streetName === streetName.includes("Lane")){
//   //  console.log('streetName',streetName) 
//   //  console.log('includesLanes' ,includesLanes)
//   return true;
//   }else{
//     return false;
//   }

// };


// function getLanes(streetNames) {
//   for(let streetName of streetNames){
//     let streetNameWithLane = streetNames.filter(listOfStreetNames);
//     return streetNameWithLane;
//   }
// };

function getLanes(streetName) {
  let newStreetName = streetName.filter(element => element.includes("Lane"))
  return newStreetName;
};
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
