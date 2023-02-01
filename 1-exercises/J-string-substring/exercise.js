/* 
  You are given an statement

  You should remove the word "and dogs" by using substring 
*/

let statement = "I like programming and dogs";

statement = statement.substring(0, 17);  // we have to count from position 0, I write where to start

console.log(statement);

/* EXPECTED OUTPUT 

  "I like programming"
  
*/
