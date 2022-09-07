function validatePasswords(passwords) {
  let   validity=[];
  for ( let index=0; index < passwords.length; index++)
  {
    element=passwords[index];
    validity.push( 
    element.length >= 5 
    &&
    containsUppercaseLetter(element)
    && 
    containsLowercaseLetter(element) 
    &&
    containsNumber(element)
    &&
    containsSymbol(element)
    &&
    ! passwords.slice(0,index).includes(element)
 )
  }
return validity;
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


let array=
[
      "Se%5",
      "TktE.TJTU",
      "384#HsHF",
      "dvyyeyy!5",
      "tryT3729",
    ]
let array2=[
      "StUFf27%",
      "Pl3nty!",
      "Jai33",
      "shajsaUA**&&",
      "Pl3nty!",
    ]
    const ddd=validatePasswords(array)
    console.log(ddd)

     const ddd2=validatePasswords(array2)
    console.log(ddd2)