function pairElement(dna) {
  const dnaPair = [];
  for (let i = 0; i < dna.length; i++) {
    const arrayPair = [];
    if (dna[i] === "A") {
      arrayPair.push("A");
      arrayPair.push("T");
    }
    else if (dna[i] === "T") {
      arrayPair.push("T");
      arrayPair.push("A");
    }
    else if (dna[i] === "C") {
      arrayPair.push("C");
      arrayPair.push("G");
    }
    else if (dna[i] === "G") {
      arrayPair.push("G");
      arrayPair.push("C");
    }
    dnaPair.push(arrayPair)
  }
  return array;
}
