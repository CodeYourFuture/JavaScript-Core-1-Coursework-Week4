/*
  Write a function that accepts a name of a country as a string and returns true or false whether the country is in the UK.
*/

const ukNations = ["Scotland", "Wales", "England", "Northern Ireland"];

function isInUK(country) {}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====
There are some Tests in this file that will help you work out if your code is working.
To run the tests for just this one file, type `npm test -- --testPathPattern 11-is-in-uk` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
===================================================
*/

test("isInUK works - case 1", () => {
  expect(isInUK("France")).toEqual(false);
});

test("isInUK works - case 2", () => {
  expect(isInUK("Republic of Ireland")).toEqual(false);
});

test("isInUK works - case 3", () => {
  expect(isInUK("England")).toEqual(true);
});
