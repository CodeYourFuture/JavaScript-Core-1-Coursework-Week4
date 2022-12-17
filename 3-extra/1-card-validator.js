function validator(cardNum) {
    const regex = /[0-9]/g;

    console.log(cardNum.length === 16 &&                                                        //check for having 16 digits
        cardNum[cardNum.length - 1] % 2 === 0 &&                                                //check for final digit be even
        cardNum.match(regex).length === 16 &&                                                   //check for all of them be numbers
        cardNum.match(regex).filter(value => value !== cardNum.match(regex)[0]).length > 0 &&   //check for having at least two different digits
        cardNum.match(regex).reduce((sum, value) => sum + Number(value), 0) > 16);              //check for sum of all digits be greater than 16

}


validator("1111111111111110");

