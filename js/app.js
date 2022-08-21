function getPin() {
  const pin = generatePin();
  const pinString = pin + "";

  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const randomPin = Math.round(Math.random() * 10000);
  return randomPin;
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();

  const displayPinFiled = document.getElementById("display-pin");
  displayPinFiled.value = pin;
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById("typed-number");
    const previousTypedNumber = typedNumberField.value;
    const newTypedNumber = previousTypedNumber + number;

    if (isNaN(number)) {
      if (number === "C") {
        typedNumberField.value = "";
      } else if (number === "<") {
        const digits = previousTypedNumber.split("");
        digits.pop();
        const remainingDigits = digits.join("");
        typedNumberField.value = remainingDigits;
      }
    } else {
      typedNumberField.value = newTypedNumber;
    }
  });

document.getElementById("verify-pin").addEventListener("click", function () {
  const displayPinFiled = document.getElementById("display-pin");
  const currentPin = displayPinFiled.value;

  const typedNumberField = document.getElementById("typed-number");
  const typedNumber = typedNumberField.value;

  const pinSuccessMessage = document.getElementById("pin-success");
  const pinFailMessage = document.getElementById("pin-fail");

  if (typedNumber === currentPin) {
    pinSuccessMessage.style.display = "block";
    pinFailMessage.style.display = "none";
  } else {
    pinFailMessage.style.display = "block";
    pinSuccessMessage.style.display = "none";
  }
});
