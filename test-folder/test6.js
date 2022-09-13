function generateRandomNumber() {
    console.log("Generating number...");
    return Math.round(Math.random() * 100);
}

function getRandomNumberGreaterThan50() {
    let generatedNumber;

    do {
        generatedNumber = generateRandomNumber();
    } while(generatedNumber <= 50); // keep trying until we get a number that is > 50

    return generatedNumber;
}

console.log(getRandomNumberGreaterThan50())
console.log(getRandomNumberGreaterThan50())
console.log(getRandomNumberGreaterThan50())
console.log(getRandomNumberGreaterThan50())
console.log(getRandomNumberGreaterThan50())
console.log(getRandomNumberGreaterThan50())
console.log(getRandomNumberGreaterThan50())
console.log(getRandomNumberGreaterThan50())