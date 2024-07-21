function intersectionOfArrays(arr1, arr2) {
  return arr1.filter((element) => {
    return arr2.includes(element);
  });
}

// removing duplicates and printing result
console.log([
  ...new Set(intersectionOfArrays([1, 5, 6, 8, 8, 9], [1, 8, 8, 10, 2, 4])),
]);

function unionOfArrays(arr1, arr2){
    return [...new Set([...arr1, ...arr2])];
}

console.log(unionOfArrays([1, 5, 6, 8, 8, 9], [1, 8, 8, 10, 2, 4]))