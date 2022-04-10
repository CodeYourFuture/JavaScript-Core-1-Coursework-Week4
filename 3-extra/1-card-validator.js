function validateCreditCard(creditCardNum){

  // The credit card number must be 16 digits in length
  if(creditCardNum.length !== 16){
    return false;
  }

  // All of the digits must be numbers
  for(var i = 0; i < creditCardNum.length; i++){
    // store the current digit 
    let currentNumber = creditCardNum[i];

    // turn the digit from a string to an integer
    currentNumber = Number.parseInt(currentNumber);

    // check that the digit is a number
    if(!Number.isInteger(currentNumber)){
      return false;
    }
  }

  // The credit card number must consist of at least two different digits (i.e. all of the digits cannot be the same)
  let obj = {};
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
  let sum = 0;
  for(var i = 0; i < creditCardNum.length; i++){
    sum += Number(creditCardNum[i]);
  }
  if(sum <= 16){
    return false;
  }

  return true;
};

// /**** tests *****/
console.log(validateCreditCard('9999777788880000')); //true
console.log(validateCreditCard('6666666666661666')); //true
console.log(validateCreditCard('a92332119c011112')); //false
console.log(validateCreditCard('4444444444444444')); //false
console.log(validateCreditCard('1211111111111112')); //true


test("valid", () => {
  expect(validateCreditCard("9999777788880000")).toBe(true);
  expect(validateCreditCard("6666666666661666")).toBe(true);
});

test("invalid characters", () => {
  expect(validateCreditCard("a92332119c011112")).toBe(false);
});

test("all same characters", () => {
  expect(validateCreditCard("4444444444444444")).toBe(false);
});

test("sum less than 16", () => {
  expect(validateCreditCard("1111111111111110")).toBe(false);
});

test("odd final number", () => {
  expect(validateCreditCard("6666666666666661")).toBe(false);
});