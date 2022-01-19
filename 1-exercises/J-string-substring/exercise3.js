/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

let str1 = statement.substring(0, 4);
let str2 = statement.substring(9, 25);

console.log(str1.concat(' ', str2));

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
