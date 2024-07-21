// removing duplicate elements in an array

function removeDuplicates(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      arr.splice(i + 1, 1); // removing the duplicate
      i--; // setting index back to check for duplicates again
    }
  }

  return arr.length;
}

function findDuplicates(arr) {
  return arr.filter(
    (element, index, array) => array.indexOf(element) !== index // array is nothing but the array(arr) which we call filter method upon
  );
}

console.log(findDuplicates([5, 5, 6, 7, 8, 8]));
console.log(removeDuplicates([5, 5, 6, 7, 8, 8]));
