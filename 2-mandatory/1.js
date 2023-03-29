function validatePasswords(passwords) {
  return passwords.map((password, index) => {
    if (
      //   index !== passwords.indexOf(password) ||
      password.length < 5 ||
      !containsUppercaseLetter(password) ||
      !containsLowercaseLetter(password) ||
      !containsNumber(password) ||
      !containsSymbol(password)
    ) {
      return false;
    } else {
      return true;
    }
  });
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
let num1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"];
let num2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"];

console.log(validatePasswords(num1));
console.log(validatePasswords(num2));
