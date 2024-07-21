function migratoryBirds(arr) {
  let max = 0,
    max_id = 6;
  let store = new Array(6).fill(0);
  for (const num of arr) {
    store[num] += 1;
    if (store[num] > max) {
      max = store[num];
      max_id = num;
    } else if (store[num] === max && num < max_id) {
      max_id = num;
    }
  }
  return max_id;
}

console.log([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);
