function translatePigLatin(str) {
  const regexConsonant = /^[^aeiou]+/;
  if (regexConsonant.test(str)) {
    const consLen = str.match(regexConsonant)[0].length;
    return str.slice(consLen) + str.match(regexConsonant)[0] + "ay";
  }
  return str + "way";
}

console.log(translatePigLatin("glove"))
