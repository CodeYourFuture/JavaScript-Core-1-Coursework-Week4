function hasOver10Alphabets (word) {
    if (word.length > 10 ) {
        return true; 
    } else {
        return false;
    }
}

function hasOver10Alphabetss (word) {
    return word.length > 10
}


/*
(input) => (output)

input is word
output is word.length > 10
word => word.length > 10
(argument) => (what it returns)

*/

function functionName(anythingGoes) {
    let isItGreaterThanTen = anythingGoes > 10;
    return isItGreaterThanTen;
}



let names = ["Bedi", " Afsoon", "Emilie", "Afsha", "BediAfsooonEmilieAfsha", "loveeveryday"];

let longNames = names.find(hasOver10Alphabets);

let longNames1 = names.find(function hasOver10Alphabets (word) {
    if (word.length > 10 ) {
        return true; 
    } else {
        return false;
    }
});

let longNames2 = names.find(word => word.length > 10);

console.log(longNames)

let longNameList = names.find(word => word.length > 10);


// console.log(hasOver10Alphabets("Emelie"));
// console.log(hasOver10Alphabetss("Emelieeeeee"));
