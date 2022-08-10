function onlyNumbers(array) {
  return array.every((element) => {
    return typeof element === "number";
  });
}

function numToNumArr(num) {
  let numArr = [],
    sNumber = num.toString();
  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    numArr.push(+sNumber.charAt(i));
  }
  return numArr;
}

function cardValidator(num) {
  let diffNum = 0;
  let x = 0;
  let i = 0;
  //   let numOr0 = (n) => (isNaN(n) ? 0 : n);
  arr = numToNumArr(num);
  let onlyNum = onlyNumbers(arr);
  if (onlyNum) {
    let sum = arr.reduce((a, b) => a + b);
    if (sum > 16) {
      if (arr.length === 16) {
        do {
          for (i; i <= arr.length; i++) {
            if (arr[i] === arr[0]) {
              x = i;
            } else {
              diffNum++;
            }
          }
          if (x >= 15 && diffNum < 2) {
            diffNum = 2000;
            // return x;
          }
          //   return diffNum;
        } while (diffNum <= 1);
        if (diffNum > 1 && diffNum < 100) {
          if (arr[15] % 2 === 0) {
            return "Credit card number is valid";
          }
        }
      } else {
        return "Credit card number is invalid";
      }
    } else {
      return "Credit card number is invalid";
    }
  }
  return "Credit card number is invalid";
}

/* ======= TESTS - DO NOT MODIFY ===== */

test("cardValidator function works - case 1", () => {
  expect(cardValidator(9999777788880000)).toEqual(
    "Credit card number is valid"
  );
});

test("cardValidator function works - case 2", () => {
  expect(cardValidator(6666666666661666)).toEqual(
    "Credit card number is valid"
  );
});

test("invalid (invalid characters) - case 3", () => {
  expect(cardValidator("a92332119c011112")).toEqual(
    "Credit card number is invalid"
  );
});

test("invalid (only one type of number) - case 4", () => {
  expect(cardValidator(4444444444444444)).toEqual(
    "Credit card number is invalid"
  );
});

test("invalid (sum less than 16) - case 5", () => {
  expect(cardValidator(1111111111111110)).toEqual(
    "Credit card number is invalid"
  );
});

test("invalid (odd final number) - case 6", () => {
  expect(cardValidator(6666666666666661)).toEqual(
    "Credit card number is invalid"
  );
});
