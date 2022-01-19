/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

let start = statement.substring(0, statement.indexOf("not"));
let end = statement.substring(
  statement.indexOf("not") + "not ".length,
  statement.length - 1
);
let result = start + end;

console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
