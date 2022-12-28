const { expect } = require("@jest/globals");

function validateCreditCard(creditCardNumber) {
  const characters = creditCardNumber.split("");

  if (characters.length !== 16) return false;

  const allNumerical = characters.every((character) => /[0-9]/.test(character));
  if (!allNumerical) return false;

  const allDigitsSame = characters.every(
    (character) => character === characters[0]
  );
  if (allDigitsSame) return false;

  const finalCharacter = +characters[characters.length - 1];
  if (finalCharacter % 2 === 1) return false;

  const digitSum = characters.reduce(
    (total, digit) => total + parseInt(digit),
    0
  );
  if (digitSum < 16) return false;

  return true;
}

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
