function largestOfAll (arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let maxNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      
      if (arr[i][j] > maxNumber) {
        maxNumber = arr[i][j];
      }
    }
    newArray.push(maxNumber);
  }
  return newArray;
}
