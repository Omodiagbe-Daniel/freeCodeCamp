function sumFibs (number) {
  const array = [0, 1];
  for (let i = 0; i < number - 1; i++) {
    array.push(array[i] + array[i + 1]);
  }
  let sum = 0;
  for (let j = 0; j < array.length; j++) {
    if (array[j] % 2 === 1 && array[j] <= number) {
      sum += array[j];
    }
  }
  return sum;
}

console.log(sumFibs(1000) )
