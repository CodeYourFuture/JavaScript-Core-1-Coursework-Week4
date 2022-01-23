/* 
  You are given an statement

  You should remove the word "and dogs" by using substring 
*/

let statement = "I like programming and dogs";

statement = statement.substring(statement.length - 8, 0);

console.log(statement);

/* EXPECTED OUTPUT 

  "I like programming"
  
*/
