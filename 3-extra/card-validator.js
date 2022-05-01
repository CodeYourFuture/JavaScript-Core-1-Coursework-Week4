function creditCardValidation(creditCradNum) {
  var regEx =
    /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
  if (creditCradNum.value.match(regEx)) {
    return true;
  } else {
    alert("Please enter a valid credit card number.");
    return false;
  }
}
