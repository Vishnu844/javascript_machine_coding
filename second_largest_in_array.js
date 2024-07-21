function secondLargest(arr) {
  arr.splice(arr.indexOf(Math.max(...arr)), 1);
  return Math.max(...arr);
}

console.log(secondLargest([1, 2, 3, 4, 5, 6, 7]));
