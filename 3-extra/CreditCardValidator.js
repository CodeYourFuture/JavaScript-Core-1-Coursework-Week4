/*
In this project you'll write a script that validates whether or not a credit card number is valid.

Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16.

For example, the following credit card numbers are valid:

```markdown
9999777788880000
6666666666661666
```

And the following credit card numbers are invalid:

```markdown
a92332119c011112 (invalid characters)
4444444444444444 (only one type of number)
1111111111111110 (sum less than 16)
6666666666666661 (odd final number)
```

These are the requirements your project needs to fulfill:

- Make a JavaScript file with a name that describes its contents.
- Create a function with a descriptive name which makes it clear what the function does. The function should take one argument, the credit card number to validate.
- Write at least 2 comments that explain to others what a line of code is meant to do.
- Return a boolean from the function to indicate whether the credit card number is valid.
- Use `node` from the command line to test if your code works as expected.

Good luck!
*/
function isLastDigitEven(n) {
  let str = n.toString().slice(-1);
  return +str % 2 === 0;
}
function sum(n) {
  let str = n.toString();
  let arr = [...str];
  let total = arr.reduce((acc, item) => +acc + +item);
  return total;
}
function isNumber(n) {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}

function validatesCard(num) {
  let str = num.toString();

  return (
    str[0].repeat(16) !== str &&
    isNumber(num) &&
    str.length === 16 &&
    isLastDigitEven(num) &&
    sum(num) > 16
  );
}

// 🧐 🧪 🧪 🧪 🧐 🧪 🧪 🧪 🧐
test("return false if invalid characters", () => {
  expect(validatesCard("a92332119c011112")).toEqual(false);
});
test("return false if only one type of number", () => {
  expect(validatesCard(4444444444444444)).toEqual(false);
});
test("return false if sum less than 16", () => {
  expect(validatesCard(1111111111111110)).toEqual(false);
});
test("return false if odd final number", () => {
  expect(validatesCard(6666666666666661)).toEqual(false);
});
test("return true if all number and sum more than 16 and final digit be even", () => {
  expect(validatesCard(9999777788880000)).toEqual(true);
});
test("return true if all number and sum more than 16 and final digit be even", () => {
  expect(validatesCard(6666666666661666)).toEqual(true);
});
