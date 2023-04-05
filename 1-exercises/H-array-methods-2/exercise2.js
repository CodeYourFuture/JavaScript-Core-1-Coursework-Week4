/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()

  we can split the string into an array
  ['d','a','n','i','e','l']

  what array method can we use to change the first letter to a capital?

  let newArr = arr.map(function (currentValue, index) {
  if (index === 0) {
    return currentValue.toUpperCase();
  }
  return currentValue
});

*/

function capitalise(str) {
  let newArray = [];
  newArray = str.split("");
  newArray[0] = newArray[0].toUpperCase();
  return newArray.join("");
  // return str.split("")[0].toUpperCase() + str.slice(1);
}



/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
