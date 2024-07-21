function sumLeftDiagonal(matrix) {
  let diagonal = 0;
  for (let i = 0; i < matrix.length; i++) {
    diagonal += matrix[i][i];
  }
  return diagonal;
}

function sumRightDiagonal(matrix) {
  let diagonal = 0;
  for (let i = 0; i < matrix.length; i++) {
    diagonal += matrix[i][matrix.length - i - 1];
  }
  return diagonal;
}

function diagonalDifference(arr) {
  return Math.abs(sumLeftDiagonal(arr) - sumRightDiagonal(arr));
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
