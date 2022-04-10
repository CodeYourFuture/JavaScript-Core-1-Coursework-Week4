
/*
Here are the rules for a valid number:
Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
*/

function validateCreditCard(creditCardNum){

  // The credit card number must be 16 digits in length
  if(creditCardNum.length !== 16){
    return false;
  }

  // All of the digits must be numbers
  for(var i = 0; i < creditCardNum.length; i++){
    // store the current digit 
    var currentNumber = creditCardNum[i];

    // turn the digit from a string to an integer
    currentNumber = Number.parseInt(currentNumber);

    // check that the digit is a number
    if(!Number.isInteger(currentNumber)){
      return false;
    }
  }

  // The credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same)
  var obj = {};
  for(var i = 0; i < creditCardNum.length; i++){
    obj[creditCardNum[i]] = true;
  }
  if(Object.keys(obj).length < 2){
    return false;
  }

  // The final digit of the credit card number must be even
  if(creditCardNum[creditCardNum.length - 1] % 2 !== 0){
    return false;
  }

  // The sum of all the digits must be greater than 16
  var sum = 0;
  for(var i = 0; i < creditCardNum.length; i++){
    sum += Number(creditCardNum[i]);
  }
  if(sum <= 16){
    return false;
  }

  return true;
};

// /**** tests *****/
// console.log(validateCreditCard('9999777788880000')); //true
// console.log(validateCreditCard('6666666666661666')); //true
// console.log(validateCreditCard('a92332119c011112')); //false
// console.log(validateCreditCard('4444444444444444')); //false
// console.log(validateCreditCard('1211111111111112')); //true


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