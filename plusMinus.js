function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zeros = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zeros++;
    }
  }

  positive = (positive / arr.length).toFixed(6);
  negative = (negative / arr.length).toFixed(6);
  zeros = (zeros / arr.length).toFixed(6);

  return positive + "\n" + negative + "\n" + zeros;
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
