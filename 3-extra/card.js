//Number must be 16 digits, all of them must be numbers.
//- You must have at least two different digits represented (all of the digits cannot be the same).
//- The final digit must be even.
//- The sum of all the digits must be greater than 16.

function checkCard (num) {
    let checked = false;
    let arrNum = (""+ num).split("");
    let arrSum = 0;
    if (arrNum.length !== 16) return false; 
    for (eachNum of arrNum) {
        if (typeof Number(eachNum) !== "number") {
            return false;
        };
        if (eachNum !== arrNum[0]) checked = true;
        arrSum = arrSum + Number(eachNum);
    }
    if (!checked) return false;
    if (arrNum[arrNum.length-1] %2 !== 0) return false;
    if (arrSum <= 16) return false;
    return true;
    
}

if (checkCard(1547555588887788)) console.log("Card is ok");
