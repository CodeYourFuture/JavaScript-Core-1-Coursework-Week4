## **PROJECT: Credit Card Validator**

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

function validateCreditCardNumber(creditCardNumber) {
  if (typeof creditCardNumber !== "number") {
    console.log(
      "Error: You did not provide the correct input type: a number (a string is not a number!)"
    );
    return false;
  }
  // check if the argument (the credit card number passed into the function) is a Number, if not reject it (return false)

  const creditCardNumberArray = creditCardNumber
    .toString()
    .split("")
    .map((element) => Number(element));

  // turn the numbers into a string, split the string into an array, and map the individual elements back into numbers (so maths operations can be performed later)

  if (creditCardNumberArray.length !== 16) {
    console.log("Error: You did not provide all 16 digits");
    return false;
  }

  // check if the number provided was 16 digits long

  if (creditCardNumberArray[creditCardNumberArray.length - 1] % 2 !== 0) {
    console.log("Error: The last digit is not an even number");
    return false;
  }

  // check if the final number is even, if not reject it (return false)

  if (creditCardNumberArray.reduce((acc, cv) => acc + cv, 0) <= 16) {
    console.log("Error: The sum of all the digits is not greater than 16");
    return false;
  }

  // check if the sum of all digits is greater than 16, if not reject it (return false)

  if (
    creditCardNumberArray.every((element, index, array) => element === array[0])
  ) {
    console.log("Error: There are not at least two different digits");
    return false;
  }

  // check if every digit in the array is the same as the first digit,
  // if that is true then it doesn't have at least two different digits, so reject it (return false)

  // if (new Set(creditCardNumberArray).size < 2) {
  //     console.log("Error: There are not at least two different digits");
  //     return false;
  // }
  // alternate way to check if it has at least two different digits
  // create a new set (only unique numbers) from the array, check its size,
  // if the size is less than 2 that means there is only a single digit being used, so reject it (return false)

  return true;
  // if all the checks do not fail, then the credit card number is valid (return true)
}

console.log(validateCreditCardNumber(9999777788880000));
// true
console.log(validateCreditCardNumber(6666666666661666));
// true
console.log(validateCreditCardNumber("a92332119c011112"));
// false (invalid characters)
console.log(validateCreditCardNumber(4444444444444444));
// false (only one type of number)
console.log(validateCreditCardNumber(1111111111111110));
// false (sum less than 16)
console.log(validateCreditCardNumber(6666666666666661));
// false (odd final number)
