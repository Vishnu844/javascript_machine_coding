function birthdayCandles(arr) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == max) {
      count++;
    }
  }

  return count;
}

console.log(birthdayCandles([3, 2, 1, 3]));
