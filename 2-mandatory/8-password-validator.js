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

  return passwords.map((element, index, array) => {
    return element.length >= 5 &&
            containsUppercaseLetter(element) &&
            containsLowercaseLetter(element) &&
            containsNumber(element) &&
            containsSymbol(element) &&
            array.indexOf(element) === index
          });

//   function characterChecks(password) {
//     // welcome to the "i refuse to use regex" helper function
//     const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
//     const numbers = "0123456789";
//     const symbols = "!#$%.*&";
 
//     let upperCaseLetterFlag = false;
//     let lowerCaseLetterFlag = false;
//     let numberFlag = false;
//     let symbolFlag = false;

//     for (let character of password) {
//       if (upperCaseLetters.includes(password[character])) {
//         upperCaseLetterFlag = true;
//       } else if (lowerCaseLetters.includes(password[character])) {
//         lowerCaseLetterFlag = true;
//       } else if (numbers.includes(password[character])) {
//         numberFlag = true;
//       } else if (symbols.includes(password[character])) {
//         symbolFlag = true;
//       }
//     }

//     return upperCaseLetterFlag && lowerCaseLetterFlag && numberFlag && symbolFlag;

//   }

//   // return passwords.map((element, index, array) => element.length >= 5 && characterChecks(element) && array.indexOf(element) === index);

}

// console.log(validatePasswords(["Se%5","TktE.TJTU","384#HsHF","dvyyeyy!5","tryT3729"]));
// [false, false, true, false, false]

// console.log(validatePasswords(["StUFf27%","Pl3nty!","Jai33","shajsaUA**&&","Pl3nty!"]));
// [true, true, false, false, false]

// Returns true if string contains at least one uppercase letter.
function containsUppercaseLetter(string) {
  return /[A-Z]/.test(string);
}

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
