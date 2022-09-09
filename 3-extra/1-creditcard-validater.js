function validateCreditCard(number){
    if(contains16DigitNumber(number) && isSumOfDigitsGreaterThan16(number) && isTwoDifferentDigit(number) && isLastDigitEven(number)){
        return "the credit card number is valid"
    }else
    return "the credit card number is not valid"
}
// Returns true if the number has 16 digits, all of them are numbers
function contains16DigitNumber(number){
    return (typeof(number)==="number" && number.toString().length===16);
}

// Returns Sum Of all Digits
function getSumOfDigits(number) {
  return String(number)
    .split('')
    .reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);
}

//Returns true if the sum of all the digits is greater than 16
function isSumOfDigitsGreaterThan16(number){
    return getSumOfDigits(number)>16;
}

// Return true if last Digit of number is even
function isLastDigitEven(number){
   let pattern = new RegExp("[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{3}[24680]{1}");
   return pattern.test(number);
}

//Return true if the number has at least two different digits(all of the digits cannot be the same)
function isTwoDifferentDigit(number){
  let myArray=[];
  myArray.push(number.toString()[0]);
  for(let i=1; i<number.toString().length; i++){
        if(number.toString()[i].includes(myArray)!=true){
            myArray.push(number.toString()[i])
        }
  }
  return myArray.length>1;
}

let number=1111111111111110;
console.log(validateCreditCard(number));
