// program is that to get all numbers which are common to multiples of array "a" and factors of array "b"
// video explanation - https://www.youtube.com/watch?v=-c_V4fQ2mKU

function getGCD(n1, n2) {
  if (n2 == 0) {
    return n1;
  }
  return getGCD(n2, n1 % n2);
}

function getLCM(n1, n2) {
  if (n1 == 0 || n2 == 0) return 0;
  else {
    let gcd = getGCD(n1, n2);
    return Math.abs(n1 * n2) / gcd;
  }
}

function getTotalX(a, b) {
  let result = 0;

  // Get LCM of all elements of a
  let lcm = a[0];
  for (let integer of a) {
    lcm = getLCM(lcm, integer);
  }

  // Get GCD of all elements of b
  let gcd = b[0];
  for (let integer of b) {
    gcd = getGCD(gcd, integer);
  }

  // Count multiples of lcm that divide the gcd
  let multiple = 0;
  while (multiple <= gcd) {
    multiple += lcm;

    if (gcd % multiple == 0) result++;
  }

  return result;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
