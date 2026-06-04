function destroyer(array, ...args) {
  return array.filter(arr => !args.includes(arr));
  }
