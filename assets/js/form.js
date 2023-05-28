function toggleSubmitButton() {
  var checkbox = document.getElementById("checkbox");
  var submitButton = document.getElementById("submit");

  if (checkbox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}