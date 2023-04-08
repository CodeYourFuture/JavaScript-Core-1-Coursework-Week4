// const { expect } = require("@jest/globals");


function cardValidation (cardNumber) {
  return cardNumber.map((element) =>
    element.length === 16 &&
    /^\d+$/.test(cardNumber) )
  // .reduce((a, b)=> a === b && a+b %2 === 0).
}
//NOT FIFNISHED
// cardValidation(9999777788880000)
// .reduce((a, b)=> a === b)
// - Number must be 16 digits, :D
//all of them must be numbers. :D
// - You must have at least two different digits represented (all of the digits cannot be the same).:D
// - The final digit must be even.
// - The sum of all the digits must be greater than 16.

test("valid", () => {
  expect(validateCreditCard("9999777788880000")).toBe(true);
  expect(validateCreditCard("6666666666661666")).toBe(true);
});

test("invalid characters", () => {
  expect(validateCreditCard("a92332119c011112")).toBe(false);
});

test("all same characters", () => {
  expect(validateCreditCard("4444444444444444")).toBe(false);
});

test("sum less than 16", () => {
  expect(validateCreditCard("1111111111111110")).toBe(false);
});

test("odd final number", () => {
  expect(validateCreditCard("6666666666666661")).toBe(false);
});
