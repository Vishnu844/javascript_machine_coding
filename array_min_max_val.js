function maxElement(arr) {
  return arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr; // if min element needed then prev < curr
  });
}

console.log(maxElement([5, 5, 6, 7, 8, 8]));
