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

function cardValidator(cardDigits) {
  return containsNumbersOnly(cardDigits) && containsLowercaseLetter(cardDigits) && lastNumberEven(cardDigits) && cardDigits.length > 15 && sumAllNumberGreaterThen16(cardDigits);
}

// Returns true if it contains only number .
function containsNumbersOnly(number) {
  return /^\d+$/.test(number);
}

// Returns true if all numbers are not same.
function containsLowercaseLetter(number) {
  return /(?!\1)/.test(number);
}

// Returns true if last number is even.
function lastNumberEven(number) {
  return /^-?\d*[02468]$/.test(number);
}

// Returns true if string contains at least one symbol.
function sumAllNumberGreaterThen16(number) {
  return /[!#$%.*&]/.test(number);
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

test("Example 1", () => {
  expect(cardValidator(["a92332119c011112"])).toEqual([false]);
});

test("Example 2", () => {
  expect(cardValidator(["4444444444444444"])).toEqual([false]);
});
test("Example 1", () => {
  expect(cardValidator(["1111111111111110"])).toEqual([false]);
});

test("Example 2", () => {
  expect(cardValidator(["6666666666666661"])).toEqual([false]);
});
test("Example 1", () => {
  expect(cardValidator(["9999777788880000"])).toEqual([true]);
});

test("Example 2", () => {
  expect(cardValidator(["6666666666661666"])).toEqual([true]);
});
