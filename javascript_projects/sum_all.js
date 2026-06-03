function sumAll([num1, num2]) {
  if (num2 > num1) {
    let result = num2;
    for (let i = 1; i <= num2 - num1; i++) {
      result += num2 - i;
    }
    return result;
  }
  else {
    let result = num1;
    for (let i = 1; i <= num1 - num2; i++) {
      result += num1 - i;
    }
    return result;
  }
  
}

