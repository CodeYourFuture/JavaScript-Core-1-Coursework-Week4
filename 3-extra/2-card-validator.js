function validateCreditCard(cardNumber) {
	if (typeof cardNumber !== "number") {
		// check if number
		return false;
	} else if (cardNumber.toString().length !== 16) {
		// check if length 16
		return false;
	} else if (checkAllDigitsSame(cardNumber)) {
		// check if all digits same
		return false;
	} else if (!checkLastEven(cardNumber)) {
		// check if final digit is even
		return false;
	} else if (!checkSum(cardNumber)) {
		// check if sum of all digits greater than 16
		return false;
	}

	return true;
}

function checkAllDigitsSame(cardNumber) {
	const string = cardNumber.toString().split("");
	const firstDigit = string[0];

	return string.every((number) => number === firstDigit);
}

console.log(checkAllDigitsSame(4343434343434343));

function checkLastEven(cardNumber) {
	const string = cardNumber.toString();

	return parseInt(string[string.length - 1]) % 2 === 0 ? true : false;
}

function checkSum(cardNumber) {
	const sum = cardNumber
		.toString()
		.split("")
		.reduce((a, c) => {
			return parseInt(a) + parseInt(c);
		});

	return sum > 16 ? true : false;
}

test("must be all numbers", () => {
	expect(validateCreditCard("37due73udueu3847")).toBe(false);
});

test.each([
	[237837, false],
	[87656765676098769, false],
	[6573765453454236, true],
])("must be 16 digits", (input, expected) => {
	expect(validateCreditCard(input)).toEqual(expected);
});

test.each([
	[4444444444444444, false],
	[4343434343434344, true],
])("all digits must not be same", (input, expected) => {
	expect(validateCreditCard(input)).toEqual(expected);
});

test("last digit must be even", () => {
	expect(validateCreditCard(7647367476762345)).toBe(false);
});

test("sum of all digits must be greater than 16", () => {
	expect(validateCreditCard(1111111111111111)).toBe(false);
});
