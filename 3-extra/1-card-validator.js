// CARD VALIDATION TOOL
// checks if the card number is correct and useable

function creditCardValidator(cardNumber) {
  let bool1 = checkDigits(cardNumber);
  let bool2 = lastDigitEven(cardNumber);
  let bool3 = checkTwoDifferent(cardNumber);
  
    if (bool1 && bool2 && bool3) {
        sumOfDigits(cardNumber);
    } else { 
        console.log("Some tests have FAILED. Not moving forward to check SumOfDigits()");
    }
}

function checkDigits(cardNumbers) {
  let cardNumber = cardNumbers;
  if (cardNumber.toString().length == 16) {
    console.log("Card length - PASSED");
    if (/^\d+$/.test(cardNumber)) {
        console.log("All numbers - PASSED  ");
        return true;
    } else {
        console.log("Not all numbers - FAILED");
        return false
    }
  } else {
      console.log("Card length - FAILED");
      return false
    // return false;
  }
}

function lastDigitEven(cardNumbers) {
  let cardNumber = cardNumbers;
  if (parseInt(cardNumber.toString().slice(-1)) % 2 === 0) {
    console.log(
      "Last digit is EVEN - PASSED ==> " +
        parseInt(cardNumber.toString().slice(-1))
    );
      return true;
  } else {
    console.log(
      "Last digit is ODD - FAILED ==> " +
        parseInt(cardNumber.toString().slice(-1))
    );
      return false;
  }
}

function checkTwoDifferent(cardNumbers) {
  let cardNumber = cardNumbers;
  let newArray = cardNumber.toString().split("");
  if (new Set(newArray).size > 1) {
      console.log("Different Digits - PASSED ==> " + newArray);
      return true;
  } else {
      console.log("Same Digits - FAILED ==> " + newArray);
      return false;
  }
}

function sumOfDigits(cardNumbers) {
  let cardNumber = cardNumbers;
  let newArray = cardNumber.split("").sort();
  let sum = 0;
  newArray.forEach((element) => {
    sum = sum + parseInt(element);
  });

  if (sum > 16) {
    console.log("Sum is greater than 16 - PASSED ==> " + sum);
  } else {
    console.log("Sum is less than 16 - FAILED ==> " + sum);
  }
}

creditCardValidator("4444444444444444");
