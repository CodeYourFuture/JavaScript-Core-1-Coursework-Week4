/*
  Array methods - .join()
  -------------------------
  Complete the capitalize function 
  It should return a string with the first letter in uppercase
  For example, capitalize("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalize(str) {
    let newStr = str.split();
   // return newStr.join(newStr[0].toUpperCase()) ; //daniel
    return newStr[0].toUpperCase();                //DANIEL
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let name = "daniel";

console.log(capitalize(name));
console.log(capitalize("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
