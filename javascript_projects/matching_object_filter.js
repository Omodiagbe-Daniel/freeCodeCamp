function whatIsInAName(arrayObject, sourceObject) {
  return arrayObject.filter(obj => Object.keys(sourceObject).every(key => obj[key] === sourceObject[key]));
}
