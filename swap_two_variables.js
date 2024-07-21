function swapVariables(a, b) {
  // using temp
  //   let temp = a;
  //   a = b;
  //   b = temp;

  // using destructuring
  //   [a, b] = [b, a];

  // sum method
  a = a + b;
  b = a - b;
  a = a - b;

  return a + " " + b;
}

console.log(swapVariables(23, 45));
