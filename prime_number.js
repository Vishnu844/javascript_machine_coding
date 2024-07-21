function isPrimeNumber(num) {
  let i,
    count = 0;
  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count <= 2) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrimeNumber(7));
