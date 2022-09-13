function validatePasswords(passwords) {
   return passwords.map((item,index)=>{
        if(containsLowercaseLetter(item) && containsUppercaseLetter(item) && containsNumber(item) && containsSymbol(item) && item.length >= 5 && passwords.indexOf(item)===index) return true;
       else return false; 
    }
    )
}

// function passwordNotPrevious(array) {
//     array.map(element=>{
        
//     })
// }

console.log(validatePasswords([
      "StUFf27%",
      "Pl3nty!",
      "Jai33",
      "shajsaUA**&&",
      "Pl3nty!",
    ]))

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

const counts = {};
const sampleArray = ['a', 'a', 'b', 'c'];
sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
console.log(counts)