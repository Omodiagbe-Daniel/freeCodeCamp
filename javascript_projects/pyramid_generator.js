function pyramid (arg1, arg2, arg3) {
  let result = "";
  if (arg3 === false) {
    for(let i = arg2, j = 1; i > 0; i--, j = j + 2) {
      result += " ".repeat(i - 1) + arg1.repeat(j) + "\n";
    }
  }
  else {
    for(let i = 0, j = arg2 * 2 - 1; i < arg2; i++, j = j - 2) {
      result += " ".repeat(i) + arg1.repeat(j) + "\n";
    }
  }
  return "\n" + result;
}
