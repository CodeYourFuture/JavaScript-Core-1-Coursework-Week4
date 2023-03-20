/* 
Card Number Validation

In this project you'll write a script that validates whether or not a credit card number is valid.

Here are the rules for a valid number:

- Number must be 16 digits
- All of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16.


*/

// Function to validate credit card number
function validateCreditCardNumber(cardNumber) {
  // Check if the card number is a string of 16 digits only
  if (!/^\d{16}$/.test(cardNumber)) {
    return false;
  }

  // Check if all the digits are not the same
  const allDigitsAreSame = cardNumber.split("").every((digit, _, arr) => digit === arr[0]);
  if (allDigitsAreSame) {
    return false;
  }

  // Check if the last digit is even
  const lastDigitIsEven = cardNumber.slice(-1) % 2 === 0;
  if (!lastDigitIsEven) {
    return false;
  }

  // Check if the sum of all the digits is greater than 16
  const sumOfDigits = cardNumber.split("").reduce((sum, digit) => sum + parseInt(digit), 0);
  if (sumOfDigits <= 16) {
    return false;
  }

  // If all the conditions pass, the credit card number is valid
  return true;
}

/* ======= TESTS - DO NOT MODIFY ===== */

/*
the following credit card numbers are VALID :

```markdown
9999777788880000
6666666666661666
```

And the following credit card numbers are INVALID :

```markdown
a92332119c011112 (invalid characters)
4444444444444444 (only one type of number)
1111111111111110 (sum less than 16)
6666666666666661 (odd final number)
```
*/

test("Invalid card number with letters", () => {
  expect(validateCreditCardNumber("a92332119c011112")).toEqual(false);
});

test("Invalid card number with repeating digits", () => {
  expect(validateCreditCardNumber("4444444444444444")).toEqual(false);
});

test("Invalid card number with sum less than 16", () => {
  expect(validateCreditCardNumber("1111111111111110")).toEqual(false);
});

test("Invalid card number with odd final digit", () => {
  expect(validateCreditCardNumber("6666666666666661")).toEqual(false);
});

test("Valid card number", () => {
  expect(validateCreditCardNumber("9999777788880000")).toEqual(true);
});

test("Valid card number with different digits", () => {
  expect(validateCreditCardNumber("6666666666661666")).toEqual(true);
});
