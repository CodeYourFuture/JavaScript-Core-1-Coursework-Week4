const cardNumbers = [
    "4111111111111111", // odd final number
    "5555555555554444", // valid Mastercard
    "3782822463100a56", // invalid characters
    "6011111111111117", // odd final number
    "3056930902590446", // valid 
    "3530111333300000", // valid 
    "4111111111111",    // invalid too short
    "5105105105105106", // valid
    "1234567890123456", // valid
    "378282246310000",  // invalid too short
    "6011111111111119", // odd final number
    "30569309025905",   // invalid too short
    "353011133330000",  // invalid too short
    "41111111111111111111", // invalid (too long)
    "0000000000000000", // invalid (all zeros)
    "79927398713",      // invalid not a valid card number format
    "1234 5678 9012 3456", // invalid (contains spaces)
    "4111-1111-1111-1111", // invalid (contains hyphens)
    "6011111111111111", // odd final number
    "30569309025901",   // invalid too short
    "3530111333300000", // valid
    "378282246310001007", // invalid too long
    "5105105105105100", // valid
    "1111111111111110", // invalid sum less than 16
  ];

// REQUIREMENTS
// Number length must be 16 digits
// All of the digits cannot be the same
// The final digit must be even.
// The sum of all the digits must be greater than 16.
// Return a boolean from the function to indicate whether the credit card number is valid.

checkValidCardLength(cardNumbers);
// This function validates card number length
  function checkValidCardLength (arr) {
    let validCardNumberLength = arr.filter(cardNumber => cardNumber.length === 16);
    areNumbersSame(validCardNumberLength);
  }

// This function validates is digits of the card number are not the same
  function areNumbersSame (arr) {
    let numbersNotSame = [];
    for (let i = 0; i < arr.length; i++) {
        const cardNumberString = arr[i];
        const digitSet = new Set();
        
        for (let j = 0; j < cardNumberString.length; j++) {
            const digit = cardNumberString[j];
            digitSet.add(digit);
        }
        if (digitSet.size > 1) {
            numbersNotSame.push(arr[i]);
        }
    }
    isLastDigitEven(numbersNotSame);
  }
// This function validates that last digit is even
  function isLastDigitEven (arr) {
    let lastDigitEven = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][15] % 2 === 0) {
            
            lastDigitEven.push(arr[i]);
        }
    }
    isSumGreater16(lastDigitEven);
  }

// This function first checks that sum of digits greater than 16 
// and if card number has a letter, it checks whether the sum is NaN and separates it
function isSumGreater16 (arr) {
    let sumGreater16 = [];
    for (let i = 0; i < arr.length; i++) {
        const cardNumber = arr[i];
        let sumOfDigits = 0;

        for (let j = 0; j < cardNumber.length; j++) {
            let digit = Number(cardNumber[j]);
            sumOfDigits += digit;
        }
        
        if (!isNaN(sumOfDigits) && sumOfDigits >= 16) {
            sumGreater16.push(arr[i])
        }
    }
    indicateValidNumber(cardNumbers, sumGreater16);
}

// This function indicates valid and invalid card numbers in array
function indicateValidNumber (arrBefore, arrAfter) {
    let validCardNumber = [];
    for (let i = 0; i < arrBefore.length; i++) {
        if (arrAfter.includes(arrBefore[i])) {
            validCardNumber.push(`${arrBefore[i]} // Valid card number`)
        } else {
            validCardNumber.push(`${arrBefore[i]} // Invalid card number`)
        }
    }
    console.log(validCardNumber);
}