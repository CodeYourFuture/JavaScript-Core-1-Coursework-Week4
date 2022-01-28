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
PasswordValidationResult=  [false, false, false, false, true] - this is incorrect!!!! = [ true, true, true, false, true ] 


// the current passwork  is passwords[i]
LOGIC: 
      Parameter: an array of strings
      Loop: While loop 
      return a array of Booleans
*/

function validatePasswords(passwords) {
  i = 0;
  acceptable = [];

  while (i < passwords.length) {
    IsAcceptable =
      containsFiveCharacters(passwords[i]) && // new boolean, test for word count
      containsUppercaseLetter(passwords[i]) &&
      containsLowercaseLetter(passwords[i]) &&
      containsNumber(passwords[i]) &&
      containsSymbol(passwords[i]) &&
      //!passwords.splice(0, i).includes(passwords[i]); // if its not included in the passport before then its true - without (!)=false
      ![...passwords].splice(0, i).includes(passwords[i]); // make a copy of the array, errase the one it has not seen, checks if the password has appeared in the array, to fully run through all of the arrays
    //adding the result to the new array acceptable
    acceptable.push(IsAcceptable);
    i++;
  }
  return acceptable;
}
console.log(
  validatePasswords([
    "fhD8!yrjj",
    "ttkTu.wer3",
    "dvyyeyY!5",
    "qwbfj76%",
    "tytT3729.",
  ])
); //`Jude1%%`, `Paris2&&`, `Jude$$`

// Returns true if string contains at least five characters.
function containsFiveCharacters(string) {
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
