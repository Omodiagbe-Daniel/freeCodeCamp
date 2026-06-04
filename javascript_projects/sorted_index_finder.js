function getIndexToIns(array, num) {
  if (array.length === 0) {
    return 0;
  }
  const sortedArray = array.sort((a, b) => a - b);
  const index = sortedArray.findIndex(number => number >= num);
  if (index === -1) {
    return array.length;
  }
  else {
    return index;
  }
}
