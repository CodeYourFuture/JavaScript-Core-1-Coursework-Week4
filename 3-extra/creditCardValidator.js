function creditCardValidator(num) {
  let str = num + "";
  return (
    /^\d{16}$/g.test(str) && // check if the credit card is exactly 16 digits
    str[0].repeat(16) !== str &&
    [...str].reduce((p, c) => p + +c, 0) > 16 && // check if sum of all digits is greater than 16
    str[str.length - 1] % 2 === 0
  );
}

console.log(creditCardValidator(9999777788880000)); // true
console.log(creditCardValidator(6666666666661666)); // true
console.log(creditCardValidator("a92332119c011112")); // false
console.log(creditCardValidator(4444444444444444)); // false
console.log(creditCardValidator(1111111111111110)); // false
console.log(creditCardValidator(6666666666666661)); // false

test("creditcard function function works - case 1", () => {
  expect(creditCardValidator(6666666666666661)).toEqual(false);
});
test("creditcard function function works - case 2", () => {
  expect(creditCardValidator(9999777788880000)).toEqual(true);
});
