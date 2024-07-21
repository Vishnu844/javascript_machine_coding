function factorsOfNum(num) {
  let i;
  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      console.log(i);
    }
  }
}

console.log(factorsOfNum(12));
