function spinalCase(str) {
  const regex1 = /[\s|_]+/g;
  const regexStr = str.split(regex1);
  let newStr = "";
  for (let string of regexStr) {
    newStr += string[0].toUpperCase() + string.slice(1,);
  }
  const splitRegex = /[A-Z]+/g;
  const sliceStr = newStr.slice(1);
  let newStr1 = sliceStr.replace(splitRegex, "-$&");
  
  
  return str[0].toLowerCase() + newStr1.toLowerCase();
  
  
}
console.log(spinalCase("This Is_Spinal _Tap"));
