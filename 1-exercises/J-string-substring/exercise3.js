/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";
let subStr1 = statement.substring(0,4);
let subStr2 = statement.substring(8, statement.length)

let result = subStr1.concat(subStr2);

console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
