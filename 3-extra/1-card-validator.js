
const isNumber = (num) => {
    const arrOfDigits = Array.from(String(num), Number);
    return arrOfDigits.every((d) => !isNaN(d));
}

const checkLengthOfNum = (num) => {
    const validLength = 16;
    return num.length === validLength;
}

const lastDigitIsEven = (num) => {
    const lastDigitStr = num.slice(-1);
    const lastDigit = parseInt(lastDigitStr);
    return lastDigit % 2 === 0;
}

const checkSumOfDigits = (num) => {
    const arrOfDigits = Array.from(String(num), Number);
    const sumOfDigits = arrOfDigits.reduce((a, b) => a + b, 0);
    return sumOfDigits > 16;
}

const checkVarietyOfDigits = (num) => {
    const arrOfDigits = Array.from(String(num), Number);
    return !arrOfDigits.every(digit => arrOfDigits[0] === digit);
}



const cardNumberValidation = (num) =>
    isNumber(num) &&
    checkLengthOfNum(num) &&
    lastDigitIsEven(num) &&
    checkSumOfDigits(num) &&
    checkVarietyOfDigits(num);
    

    
console.log(cardNumberValidation('9999777788880000'));
console.log(cardNumberValidation('6666666666661666'));
console.log(cardNumberValidation('a92332119c011112'));
console.log(cardNumberValidation('4444444444444444'));
console.log(cardNumberValidation('1111111111111110'));
console.log(cardNumberValidation('6666666666666661'));
