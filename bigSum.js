function aVeryBigSum(ar) {
  const bigSum = ar.reduce((a, b) => a + b);
  return bigSum;
}

console.log(
  aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
);