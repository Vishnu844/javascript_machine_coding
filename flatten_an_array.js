// flatting an array without flat method.

function flatten(arr) {
  return arr.reduce((prevVal, currVal) => {
    if (Array.isArray(currVal)) {
      prevVal = prevVal.concat(flatten(currVal));
    } else {
      prevVal.push(currVal);
    }
    return prevVal;
  }, []);
}

console.log(
  flatten([
    [1, 2, [3, 4]],
    [5, [6]],
  ])
);
