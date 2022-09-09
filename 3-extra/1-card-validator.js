/*
In this project you'll write a script that validates whether or not a credit card number is valid.

Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16.
*/


// The following function checks if a string is only numbers
function onlyNumbers(string) {
  return /^[0-9]*$/.test(string);
}

const ccValidator = (cc) => {
  const sum = cc.split("").reduce((a, i) => a + parseInt(i, 10), 0);
  return onlyNumbers(cc) && sum >= 16 && sum / 16 !== parseInt(cc[0], 10) && cc[15] % 2 === 0;
  //    check if numbers only / sum > 16 / check if all numbers are same / check if last digit is even
};

test("ccValidator - case 1", () => {
  expect(ccValidator("9999777788880000")).toEqual(true);
});
test("ccValidator - case 2", () => {
  expect(ccValidator("6666666666661666")).toEqual(true);
});
test("ccValidator - case 3", () => {
  expect(ccValidator("a92332119c011112")).toEqual(false);
});
test("ccValidator - case 4", () => {
  expect(ccValidator("4444444444444444")).toEqual(false);
});
test("ccValidator - case 5", () => {
  expect(ccValidator("1111111111111110")).toEqual(false);
});
test("ccValidator - case 6", () => {
  expect(ccValidator("6666666666666661")).toEqual(false);
});
