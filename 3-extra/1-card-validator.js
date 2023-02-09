//16 number, even, sum of them greater than 16
// made a function first and then converted numbers to string and split them
function cardValidator(cardNum){

    // if(typeof cardNum !== "number"){
    //     return "your card number is invalid!";
    // }
    //split card numbers digits to string => array of string
    let cardNumberArray = cardNum.toString();
    if(cardNumberArray.some(i => !Number.isInteger(i))){
        return "Nan";

    }
    

    if(cardNumberArray.length!==16){
        return "your card number must be 16 digits";

    }
    
}
console.log(cardValidator(12341234123412a3));

//1234123412341234
// array =["volvo", "BMW", "Tesla"];
//array = [1, 2, 1];