const rangeOfNumbers = (startNum, endNum) => {
  const numArr = [];
  if (startNum == endNum) {
    numArr.push(endNum);
    return numArr;
  }
  else {
    numArr.push(startNum);
    numArr.push(...rangeOfNumbers(startNum + 1, endNum));
    return numArr;
  }
}

console.log(rangeOfNumbers(5,10))
