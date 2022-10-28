/* 
  You are given an statement

  You should remove the word "and dogs" by using substring 
*/

let statement = "I like programming and dogs";
let index = statement.indexOf("and dogs");
console.log(index);

statement = statement.substring(0,index- 1);

console.log(statement);

/* EXPECTED OUTPUT 

  "I like programming"
  
*/
