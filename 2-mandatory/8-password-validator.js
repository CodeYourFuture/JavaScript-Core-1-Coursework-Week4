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


const arr = ["fhD8!yrjj", "ttkT", "dvyy", "ttkT", "qwbfj76%", "tytT3729."];

function validatePasswords(passwords) {
  const result = [];
  for (let i = 0; i < passwords.length; i++) {
    const check1 = containsAtLeast5Chars(passwords[i]);
    const check2 = containsUppercaseLetter(passwords[i]);
    const check3 = containsLowercaseLetter(passwords[i]);
    const check4 = containsNumber(passwords[i]);
    const check5 = containsSymbol(passwords[i]);
    let isNotRepeatedPassword = true;
    for (let j = 0; j < i; j++) {
      if (passwords[j] === passwords[i]) {
        isNotRepeatedPassword = false;
      }
    }
    result.push(
      check1 && check2 && check3 && check4 && check5 && isNotRepeatedPassword
    );
  }
  return result;
}







// Returns true if string has at least 5 characters
function containsAtLeast5Chars(string) {
  return string.length >= 5;
}

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
