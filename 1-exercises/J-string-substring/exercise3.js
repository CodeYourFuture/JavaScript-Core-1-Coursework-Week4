/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

let result = statement.substring(0, 4).concat(" ",statement.substring(statement.length -16));

console.log(result);
// console.log(result2)

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
