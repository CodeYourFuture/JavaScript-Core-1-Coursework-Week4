/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

//let result = "";
let firstSub = statement.substring(0, 5);
let secondSub = statement.substring(9, statement.length);
let result = firstSub.concat(secondSub);
console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
