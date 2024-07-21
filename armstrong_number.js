function findArmstrongNumber(num) {
  let temp = num;
  let numLength = num.toString().length;
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit ** numLength;
    num = parseInt(num / 10);
  }
  if (sum == temp) {
    console.log("armstrong number");
  } else {
    console.log("not an armstrong number");
  }
}

console.log(findArmstrongNumber(152));
