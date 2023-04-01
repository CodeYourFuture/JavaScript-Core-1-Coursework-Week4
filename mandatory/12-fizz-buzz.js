/* 
  Write a function that accepts an array of numbers as a parameter and loops through the numbers.
  For each number the function should print (using console.log):

  - If the number is a multiple of 3, print “Fizz” instead of the number
  - If the number is a multiple of 5, print “Buzz” instead of the number
  - If the number is a multiple of *both* 3 and 5, print “FizzBuzz” instead of the number
  - If the number is none of the above, just print the number
*/

function fizzBuzz(numbers) {}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====
There are some Tests in this file that will help you work out if your code is working.
To run the tests for just this one file, type `npm test -- --testPathPattern 12-fizz-buzz` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
===================================================
*/

test("fizzBuzz works", () => {
  const log = jest.spyOn(console, "log").mockImplementation(() => {});

  fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

  expect(log).toHaveBeenNthCalledWith(1, 1);
  expect(log).toHaveBeenNthCalledWith(2, 2);
  expect(log).toHaveBeenNthCalledWith(3, "Fizz");
  expect(log).toHaveBeenNthCalledWith(4, 4);
  expect(log).toHaveBeenNthCalledWith(5, "Buzz");
  expect(log).toHaveBeenNthCalledWith(6, "Fizz");
  expect(log).toHaveBeenNthCalledWith(7, 7);
  expect(log).toHaveBeenNthCalledWith(8, 8);
  expect(log).toHaveBeenNthCalledWith(9, "Fizz");
  expect(log).toHaveBeenNthCalledWith(10, "Buzz");
  expect(log).toHaveBeenNthCalledWith(11, 11);
  expect(log).toHaveBeenNthCalledWith(12, "Fizz");
  expect(log).toHaveBeenNthCalledWith(13, 13);
  expect(log).toHaveBeenNthCalledWith(14, 14);
  expect(log).toHaveBeenNthCalledWith(15, "FizzBuzz");

  log.mockRestore();
});
