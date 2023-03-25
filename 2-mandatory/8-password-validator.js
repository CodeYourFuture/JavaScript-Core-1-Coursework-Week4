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
  /*   let result = [];
  for (let i = 0; i < passwords.length; i++) {
    if (
      containsLowercaseLetter(passwords[i]) &&
      containsUppercaseLetter(passwords[i]) &&
      containsNumber(passwords[i]) &&
      containsSymbol(passwords[i]) &&
      passwords[i].length >= 5
    ) {
      if (result.indexOf(passwords[i]) === -1) {
        result.push(true);
      } else {
        result.push(false);
      }
    } else {
      result.push(false);
    }
  }
  return result; */
  let result = [];
  let seenPasswords = []; // create a new array to keep track of seen passwords
  for (let i = 0; i < passwords.length; i++) {
    if (
      containsLowercaseLetter(passwords[i]) &&
      containsUppercaseLetter(passwords[i]) &&
      containsNumber(passwords[i]) &&
      containsSymbol(passwords[i]) &&
      passwords[i].length >= 5
    ) {
      if (seenPasswords.indexOf(passwords[i]) === -1) {
        result.push(true);
        seenPasswords.push(passwords[i]); // add current password to seen passwords array
      } else {
        result.push(false);
      }
    } else {
      result.push(false);
    }
  }
  return result;
}
console.log(
  validatePasswords(["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"])
);

// Returns true if string contains at least one uppercase letter.
function containsUppercaseLetter(string) {
  return /[A-Z]/.test(string);
}
//console.log(containsUppercaseLetter("yUhbsdj"));
// Returns true if string contains at least one lowercase letter.
function containsLowercaseLetter(string) {
  return /[a-z]/.test(string);
}

// Returns true if string contains at least one number.
function containsNumber(string) {
  return /[0-9]/.test(string);
}

// Returns true if string contains at least one symbol.
function containsSymbol(string) {
  return /[!#$%.*&]/.test(string);
}
console.log(containsSymbol);
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
