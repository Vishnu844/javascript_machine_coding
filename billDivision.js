function bonAppetit(bill, k, b) {
  bill.splice(k, 1);
  let total = bill.reduce((a, b) => a + b) / 2;
  return Math.abs(total - b) == 0 ? "Bon Appetit" : Math.abs(total - b);
}

console.log(bonAppetit([3, 10, 2, 9], 1, 7));
