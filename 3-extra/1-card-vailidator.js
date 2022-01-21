function isCardValid(cardNumber) {
  function isGreaterThan16() {
    let sum = cardNumber
      .split('')
      .reduce((a, b) => parseInt(a) + parseInt(b), 0)
    return sum > 16
  }
  function isValidCharacters() {
    let len = cardNumber.split('').filter((digit) => !/^\d+$/.test(digit))
      .length
    return len == 0
  }
  function isFinalDigitEven() {
    return parseInt(cardNumber[cardNumber.length - 1]) % 2 === 0
  }
  function isDigitsDifferent() {
    for (let i = 0; i < cardNumber.length; i++) {
      if (
        cardNumber.split('').filter((a) => a != cardNumber.split('')[i])
          .length > 0
      )
        return true
    }
    return false
  }
  return (
    /* Number must be 16 digits     */ cardNumber.length == 16 &&
    /* Sum must be greater than 16  */ isGreaterThan16() &&
    /* Check invalid characters     */ isValidCharacters() &&
    /* The final digit must be even */ isFinalDigitEven() &&
    /* At least two different digits*/ isDigitsDifferent()
  )
}

/* ======= TESTS - DO NOT MODIFY ===== */

test('test 1', () => {
  expect(isCardValid('9999777788880000')).toEqual(true)
})
test('test 2', () => {
  expect(isCardValid('6666666666661666')).toEqual(true)
})
test('test 3', () => {
  expect(isCardValid('a92332119c011112')).toEqual(false)
})
test('test 4', () => {
  expect(isCardValid('4444444444444444')).toEqual(false)
})
test('test 5', () => {
  expect(isCardValid('1111111111111110')).toEqual(false)
})
test('test 6', () => {
  expect(isCardValid('6666666666666661')).toEqual(false)
})
