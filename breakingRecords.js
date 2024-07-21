function breakingRecords(scores) {
  let n = scores.length;
  let max = scores[0];
  let min = scores[0];
  let maxCount = 0;
  let minCount = 0;
  for (let i = 1; i < n; i++) {
    if (scores[i] < min && scores[i] < max) {
      min = scores[i];
      minCount++;
    } else if (scores[i] > min && scores[i] > max) {
      max = scores[i];
      maxCount++;
    }
  }
  return [maxCount, minCount];
}

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
