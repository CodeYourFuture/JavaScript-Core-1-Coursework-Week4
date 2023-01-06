
function validateCreditCartNumber(number){
  //check the number is a string and has 16 characters. If either of these checks fails, the function returns false. 
  if (typeof number !== "string" || number.length !== 16) {
    return false;
  }
  //check all the characters in the string are digits.If any character is not a digit , the function returns false.
  for (let i = 0; i < number.length; i++) {
    if (isNaN(number[i])) {
      return false;
    }
  }

  //check there are at least two different digits in the number
  let hasDifferentDigits = false;
  for (let i = 0; i < 10; i++) {
    if (number.includes(i.toString())) {
      hasDifferentDigits = true;
      break;
    }
  }
  if (!hasDifferentDigits) {
    return false;
  }

  //check that the final digit is even. If it's not even it returns false.
  if (parseInt(number[15]) % 2 !== 0) {
    return false;
  }
//check that the sum of the digits is greater than 16. If the sum of digits is not greater than 16, it returns false.
let sum = 0;
for(let i = 0; i < 16; i++){
    sum += parseInt(number[i]);
}
if (sum <= 16){
    return false;
}
return true;
}