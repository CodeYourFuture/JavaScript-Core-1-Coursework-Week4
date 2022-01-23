/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";
let firstPart = statement.substring(0, 5);
let secondPart = statement.substring(9);
let result = firstPart + secondPart;

console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
