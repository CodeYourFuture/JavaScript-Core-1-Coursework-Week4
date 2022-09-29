function onlyNumbers(string) {
  return /^[0-9]*$/.test(string);
}
// check if numbers only / sum > 16 / check if all numbers are same / check if last digit is even
const ccValidator = (cc) => {
  const sum = cc.split("").reduce((a, i) => a + parseInt(i, 10), 0);
  return onlyNumbers(cc) && sum >= 16 && sum / 16 !== parseInt(cc[0], 10) && cc[15] % 2 === 0;
}

console.log(ccValidator("6666666666666661"));