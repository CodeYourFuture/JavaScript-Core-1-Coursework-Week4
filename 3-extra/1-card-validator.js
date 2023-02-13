function validateCreditCard(creditCardNumber) {
  // Split the credit card number into an array of characters
  const characters = creditCardNumber.split("");

  // Check if the number of characters is 16
  if (characters.length !== 16) return false;

  // Check if all characters are numerical
  const allNumerical = characters.every((character) => /[0-9]/.test(character));
  if (!allNumerical) return false;

  // Check if all digits are the same
  const allDigitsSame = characters.every(
    (character) => character === characters[0]
  );
  if (allDigitsSame) return false;

  // Check if the final character is even
  const finalCharacter = +characters[characters.length - 1];
  if (finalCharacter % 2 === 1) return false;

  // Check if the sum of all digits is greater than 16
  const digitSum = characters.reduce(
    (total, digit) => total + parseInt(digit),
    0
  );
  if (digitSum < 16) return false;

  // If all checks pass, return true
  return true;
}

/* ======= TESTS - DO NOT MODIFY ===== */

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
