const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const textInput = document.getElementById("text-input");

function isPalindrome () {
  if (textInput.value === "") {
    alert("Please input a value");
    return;
  }

  const string = textInput.value
  .toLowerCase()
  .replace(/[^a-z0-9]/g, "");

  if (string === string.split("").reverse().join("")) {
    result.textContent = `${textInput.value} is a palindrome`;
  }
  else {
    result.textContent = `${textInput.value} is not a palindrome`;
  }

}
checkBtn.addEventListener("click", isPalindrome)
