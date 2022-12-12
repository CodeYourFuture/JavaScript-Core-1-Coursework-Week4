const isValidCreditCardNumber = number => {

    if (typeof number !== 'number') {
      console.log('not a number')
      return false
    }
  
    const stringNumber = number.toString()
  
    if (stringNumber.length !== 16) {
      console.log('not 16 digits')
      return false
    }
  
    if (stringNumber[stringNumber.length-1] % 2 !== 0) {
      console.log('last digit not even')
      return false
    }
  
    let isValid = false
    
    const numberAsCharArray = stringNumber.split('')
  
    if (numberAsCharArray.reduce((a,b)=>parseInt(a)+parseInt(b)) < 16) {
      console.log('sum of digits is less than 16')
      return false
    }
  
    for (let i=1; i< numberAsCharArray.length;i++){
      if (numberAsCharArray[i] !== numberAsCharArray[i-1]){
        console.log('at least 2 different digits were used')
        isValid = true
        break
      }
    }
  
    return isValid
  }
  isValidCreditCardNumber("milad")