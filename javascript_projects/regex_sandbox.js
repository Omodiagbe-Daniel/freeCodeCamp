const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let str = "";
  if (caseInsensitiveFlag.checked) {
    str += "i";
  }
  if (globalFlag.checked) {
    str += "g";
  }
  return str;
}

testButton.addEventListener("click", () => {
  const regex = new RegExp(pattern.value, getFlags())
  if (stringToTest.textContent.match(regex)) {
    const match = stringToTest.textContent.replace(regex,`<span class="highlight">$&</span>`);
    stringToTest.innerHTML = match;
    
    const regResult = stringToTest.querySelectorAll("span");
    let string = "";
    regResult.forEach(res => { 
      string += res.textContent + ", ";
    })
    result.textContent = string.slice(0, string.length-2);
  } else {
    result.textContent = "no match";
  }

})



