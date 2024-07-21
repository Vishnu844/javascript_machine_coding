const arr1 = [1, 5, 7];
const arr2 = [1, 5, 7, 8];

// const arr3 = [...arr1, ...arr2]; -- TO JOIN TWO ARRAYS

const isEqual = JSON.stringify(arr1) == JSON.stringify(arr2);

console.log(isEqual);
