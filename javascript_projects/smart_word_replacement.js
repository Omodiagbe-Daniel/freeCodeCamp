function myReplace(str, wordToReplace, replacement) {
  const regex = /[A-Z]/;
  if (regex.test(wordToReplace[0])) {
    return str.replace(wordToReplace, replacement[0].toUpperCase() + replacement.slice(1))
  }
  else {
    return str.replace(wordToReplace, replacement[0].toLowerCase() + replacement.slice(1));
  }
}
