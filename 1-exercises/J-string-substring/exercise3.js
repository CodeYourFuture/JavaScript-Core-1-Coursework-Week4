/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

let result = statement.substring(0,5);
 const result1=statement.substring(9,statement.length)
result=result.concat(result1)
console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
