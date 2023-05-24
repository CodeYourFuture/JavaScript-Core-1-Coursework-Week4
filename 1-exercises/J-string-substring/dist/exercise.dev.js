"use strict";

/* 
  You are given an statement

  You should remove the word "and dogs" by using substring 
*/
var statement = "I like programming and dogs";
statement = statement.substring(0, statement.indexOf("and") - 1);
console.log(statement);
/* EXPECTED OUTPUT 

  "I like programming"
  
*/