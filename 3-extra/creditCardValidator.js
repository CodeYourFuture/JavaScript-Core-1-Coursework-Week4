function validateCreditCard(cardNumber){
    // The function takes a credit card as a parameter.
    let numStr = cardNumber.toString();
    let numStrArr = numStr.split("");
    let sum = 0;
    // To check if the number is 16 digits
    if(numStr.length != 16){
        return false;
    }
    
    // To check if all the digits are numbers
    if(isNaN(numStr)){
        return false;
    }

    // To check if the number has different digits
    let count = 0;
    for(let i = 0; i < numStrArr.length-1; i++){
        if(numStrArr[i] != numStrArr[i+1]){
            count++;
        }
    }
    if(count === 0){
        return false;
    }

    
    
    // To check if the final digit is even
    if(cardNumber % 2 === 1){
        return false;
    }

    // To check if the sum of all the digits is greater than 16
    while (cardNumber) {
    sum += cardNumber % 10;
    cardNumber = Math.floor(cardNumber / 10);
    }
    if(sum <= 16){
        return false;
    }

    return true;
}
console.log("True solutions");
console.log(validateCreditCard(9999777788880000));
console.log(validateCreditCard(6666666666661666));
console.log("False solutions");
// console.log(validateCreditCard(a92332119c011112));
console.log(validateCreditCard(4444444444444444));
console.log(validateCreditCard(1111111111111110));
console.log(validateCreditCard(6666666666666661));