/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";
let result = "";

let wordToRemove = "not";

let index = statement.indexOf(wordToRemove);

if (index !== -1) {
  let length = wordToRemove.length;

  let firstPart = statement.substring(0, index);
  let secondPart = statement.substring(index + length);

  result = firstPart + secondPart;

  console.log(result);
}
/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
