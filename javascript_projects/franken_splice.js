function frankenSplice (array1, array2, index) {
  const copyArray = array2.slice();
  for (let i = 0; i < array1.length; i++) {
    copyArray.splice(index + i, 0, array1[i]);
  }
  return copyArray;
}
