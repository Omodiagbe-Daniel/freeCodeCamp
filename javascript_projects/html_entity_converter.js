function convertHTML (str) {
  let newString = str;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "&") {
      newString =  newString.replace("&", "&amp;"); 
    }
    else if (str[i] === "<") {
      newString =  newString.replace("<", "&lt;"); 
    }
    else if (str[i] === ">") {
      newString =  newString.replace(">", "&gt;"); 
    }
    else if (str[i] === "\"") {
      newString =  newString.replace("\"", "&quot;"); 
    }
    else if (str[i] === "'") {
      newString =  newString.replace("'", "&apos;"); 
    }
  }
  return newString;
}

console.log(convertHTML('Stuff in "quotation marks"'));
