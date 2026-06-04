function diffArray(array1, array2) {
    const diff1 =  array1.filter(array => !(array2.includes(array)) && array);
    const diff2 =  array2.filter(array => !(array1.includes(array)) && array);
    return [...diff1, ...diff2]
}
