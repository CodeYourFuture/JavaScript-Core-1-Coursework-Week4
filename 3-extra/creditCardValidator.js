function creditCardValidator(creditCardNumber) {
    let stringArr = creditCardNumber.split("");                                        //create an array of creditCardNumber's digit (it return array of string)
    let newNumber = stringArr.map((item) => Number(item));                             // convert string to number
  
    console.log(
      newNumber.every((item) => item >= 0 && item <= 9 && newNumber.length === 16)&&    //Number must be 16 digits, all of them must be numbers.     
      !!newNumber.find((item) => item !== newNumber[0]) &&                              //You must have at least two different digits represented 
      newNumber[newNumber.length - 1] % 2 === 0 &&                                      //The final digit must be even.
      (newNumber.reduce((itemSum, item) => itemSum + item, 0)) >= 16                    //The sum of all the digits must be greater than 16. 
    );
    
  }
  
  
  
  creditCardValidator("2222222222222222");//parameter is string