/* 

PROJECT: Credit Card Validator**

In this project you'll write a script that validates whether or not a credit card number is valid.

Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16.

For example, the following credit card numbers are valid:

9999777788880000
6666666666661666

And the following credit card numbers are invalid:

a92332119c011112 (invalid characters)
4444444444444444 (only one type of number)
1111111111111110 (sum less than 16)
6666666666666661 (odd final number)

These are the requirements your project needs to fulfill:

- Make a JavaScript file with a name that describes its contents.
- Create a function with a descriptive name which makes it clear what the function does. 
  The function should take one argument, the credit card number to validate.
- Write at least 2 comments that explain to others what a line of code is meant to do.
- Return a boolean from the function to indicate whether the credit card number is valid.

*/

// Returns true if string consists of 16 digits; the last digit being even.
function valid16DigitNumber(string) {
  return /^[0-9]{15}[02468]$/.test(string);
}

function validateCreditCardNumber(aString) {
        return valid16DigitNumber(aString) &&      // is the string 16 characters long consisting of all digits and ending with an even number?
               aString != aString[0].repeat(16) && // check that it does NOT consist of the same digit only
                                                   // the sum of all the digits is greater than 16
               aString.split('').reduce((total, num) => total + Number(num), 0) > 16                                             
}

// The following credit card numbers are valid:

console.log("The following five ought to be true\n");

console.log(validateCreditCardNumber("9999777788880000"));
console.log(validateCreditCardNumber("6666666666661666"));
console.log(validateCreditCardNumber("1234567890123456"));
console.log(validateCreditCardNumber("9876543210123456"));
console.log(validateCreditCardNumber("1111222233334444"));

// And the following credit card numbers are invalid:

console.log("\nThe following nine ought to be false\n");

console.log(validateCreditCardNumber("a92332119c011112")); // (invalid characters)
console.log(validateCreditCardNumber("4444444444444444")); // (only one type of number)
console.log(validateCreditCardNumber("1111111111111110")); // (sum less than 16)
console.log(validateCreditCardNumber("6666666666666661")); // (odd final number)
console.log(validateCreditCardNumber("4444333322221111")); // (odd final number)
console.log(validateCreditCardNumber(""));                 // (null - too short)
console.log(validateCreditCardNumber("11112222333344"));   // (too short)
console.log(validateCreditCardNumber("11112$%^&*334444")); // (invalid characters)
console.log(validateCreditCardNumber("0110011001100110")); //  (sum less than 16)
