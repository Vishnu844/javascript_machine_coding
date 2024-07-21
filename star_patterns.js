// function printIncreasingTriangle(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "* ";
//     console.log(str.repeat(i));
//   }
// }

// function printIncreasingTriangleRight(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "* ";
//     let space = "  ";
//     console.log(space.repeat(n - i) + str.repeat(i));
//   }
// }

// function printDecreasingTriangle(n) {
//   for (let i = n; i >= 1; i--) {
//     let str = "* ";
//     console.log(str.repeat(i));
//   }
// }

// function printDecreasingTriangleRight(n) {
//   for (let i = n; i >= 1; i--) {
//     let str = "* ";
//     let space = "  ";
//     console.log(space.repeat(n - i) + str.repeat(i));
//   }
// }

// function printHillPattern(n) {
//   let space = "  ";
//   let star = "* ";
//   for (let i = 1; i <= n; i++) {
//     console.log(space.repeat(n - i) + star.repeat(i - 1) + star.repeat(i));
//   }
// }

// function printDownWardHillPattern(n) {
//   console.log("entered in function");
//   let space = "  ";
//   let star = "* ";
//   for (let j = n; j >= 1; j--) {
//     console.log(space.repeat(n - j) + star.repeat(j-1) + star.repeat(j));
//   }
// }

// printIncreasingTriangle(5);
// printIncreasingTriangleRight(5);
// printDecreasingTriangle(5);
// printDecreasingTriangleRight(5);
// printHillPattern(5);
// printDownWardHillPattern(5);