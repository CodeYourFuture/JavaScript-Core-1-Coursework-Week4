/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

We have supplied functions which will help you with some of these checks.

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/

function validatePasswords(passwords) {
  // Make variables for letters and numbers to be Tested
  const upperCaseLetters = /[A-Z]/;
  const lowerCaseLetters = /[a-z]/;
  const numberSet = /[0-9]/;
  const symbolSet = /[!#$%.*&]/ ;
  
 
// Test each of these variables and store the result in another variable
const resultUpperCase = upperCaseLetters.test(passwords);
const resultLowerCase = lowerCaseLetters.test;(passwords);
const resultNumberSet = numberSet.test(passwords);
const resultSymbolSet = symbolSet.test(passwords)
// return the result for all the three tests together into a single boolean
return resultUpperCase && resultLowerCase && resultNumberSet && resultSymbolSet;
  
}

// Returns true if string contains at least one uppercase letter.
function containsUppercaseLetter(string) {
  const upperCaseLetters = /[A-Z]/;
  
  return upperCaseLetters.test(string);
}

// Returns true if string contains at least one lowercase letter.
function containsLowercaseLetter(string) {
  const lowerCaseLetters = /[a-z]/;
  return lowerCaseLetters.test(string);
}

// Returns true if string contains at least one number.
function containsNumber(string) {
  const numberSet = /[0-9]/;
  return numberSet.test(string);
}

// Returns true if string contains at least one symbol.
function containsSymbol(string) {
  const symbolSet = /[!#$%.*&]/ ;
  return symbolSet.test(string);
}

/* ======= TESTS - DO NOT MODIFY ===== */

test("Example 1", () => {
  expect(
    validatePasswords([
      "Se%5",
      "TktE.TJTU",
      "384#HsHF",
      "dvyyeyy!5",
      "tryT3729",
    ])
  ).toEqual([false, false, true, false, false]);
});

test("Example 2", () => {
  expect(
    validatePasswords([
      "StUFf27%",
      "Pl3nty!",
      "Jai33",
      "shajsaUA**&&",
      "Pl3nty!",
    ])
  ).toEqual([true, true, false, false, false]);
});
