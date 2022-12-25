/* 
  You are given an statement

  You should remove the word "and dogs" by using substring 
*/

let statement = "I like programming and dogs";

statement = statement.substring(0, 18);

//alternative solution
// const newStatement = statement.split(" ");
// newStatement.pop();
// newStatement.pop();
// const newNewStat = newStatement.join(" ");

// console.log(newNewStat);
console.log(statement);

/* EXPECTED OUTPUT 

  "I like programming"
  
*/
