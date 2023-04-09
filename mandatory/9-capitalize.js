/*
  Write a function that accepts a string as a parameter and returns a string where the first letter of the input string is uppercase.
  For example, capitalize("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalize(str) {}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====
There are some Tests in this file that will help you work out if your code is working.
To run the tests for just this one file, type `npm test -- --testPathPattern 10-capitalize` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
===================================================
*/

test("capitalize works - case 1", () => {
  expect(capitalize("hello")).toEqual("Hello");
});

test("capitalize works - case 2", () => {
  expect(capitalize("daniel")).toEqual("Daniel");
});

test("capitalize works - case 3", () => {
  expect(capitalize("ivina")).toEqual("Ivina");
});
