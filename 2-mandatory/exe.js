function validatePasswords(passwords) {
  let newArr = [];
  let length = 0;
  let upperLetter = false;
  let lowerLetter = false;
  let hasNum = false;
  let hasSymbol = false;
  let isPreviousPassword = true;
  let newPassWord = [];

  passwords.forEach((password) => {
    length = containsFiveChar(password);
    if (length) {
      upperLetter = containsUppercaseLetter(password);
      if (upperLetter) {
        lowerLetter = containsLowercaseLetter(password);
        if (lowerLetter) {
          hasNum = containsNumber(password);
          if (hasNum) {
            hasSymbol = containsSymbol(password);
            if (hasSymbol) {
              isPreviousPassword = containsPreviousPassword(
                newPassWord,
                password
              );
              if (isPreviousPassword) {
                newArr.push(false);
              } else {
                newPassWord.push(password);
                newArr.push(true);
              }
            } else {
              newArr.push(false);
            }
          } else {
            newArr.push(false);
          }
        } else {
          newArr.push(false);
        }
      } else {
        newArr.push(false);
      }
    } else {
      newArr.push(false);
    }
  });
  return newArr;
}

// Returns true if string contains at least one uppercase letter.
function containsFiveChar(string) {
  return /.{5,}/.test(string);
}
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

function containsPreviousPassword(passwords, password) {
  if (passwords.includes(password)) {
    return true;
  } else {
    return false;
  }
}
const password = "384#HsHF";
const passwords = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"];

let answer = validatePasswords(passwords);

console.log(answer);
