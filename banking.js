function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValue = parseFloat(inputField.value);

  inputField.value = "";

  return inputValue;
}

function getInnerTextValue(id) {
  const fieldTag = document.getElementById(id);
  const fieldTagText = fieldTag.innerText;
  const value = parseFloat(fieldTagText);
  return value;
}

function updateTotal(fieldId, amount) {
  previousTotal = getInnerTextValue(fieldId);
  const newTotal = previousTotal + amount;
  document.getElementById(fieldId).innerText = newTotal;
}

function updateTotal(fieldId, amount) {
  const fieldTag = document.getElementById(fieldId);
  const previousTotalInText = fieldTag.innerText;
  const previousTotal = parseFloat(previousTotalInText);
  const newTotal = previousTotal + amount;
  fieldTag.innerText = newTotal;
}

function updateBalance() {}

console.log(updateBalance());

// add event handler on deposit button
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const amount = getInputValue("deposit-input");
    console.log(amount);
    if (amount > 0) {
      updateTotal("deposit-money", amount);
    }
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const amount = getInputValue("withdraw-input");

    if (amount > 0) {
      updateTotal("withdraw-money", amount);
    }
  });
