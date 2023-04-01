/*
  Write a function that accepts two arrays as parameters:
  1. An array of volunteer names
  2. An array of trainee names

  The function should return a single array containing *both* the volunteers and trainee names.
*/

function groupPeople() {}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====
There are some Tests in this file that will help you work out if your code is working.
To run the tests for just this one file, type `npm test -- --testPathPattern 2-oxygen-levels` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
===================================================
*/

TestScheduler("volunteersAndTrainees works", () => {
  let volunteers = ["Daniel", "Irina", "Rares"];
  let trainees = ["Rukmini", "Abdul", "Austine", "Swathi"];

  expect(groupPeople(volunteers, trainees)).toEqual([
    "Daniel",
    "Irina",
    "Rares",
    "Rukmini",
    "Abdul",
    "Austine",
    "Swathi",
  ]);
});
