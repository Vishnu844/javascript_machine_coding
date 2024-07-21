function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      let nextMultipleOfFive = Math.ceil(grades[i] / 5) * 5;
      if (nextMultipleOfFive - grades[i] < 3) {
        grades[i] = nextMultipleOfFive;
      }
    }
  }
  return grades;
}

console.log(gradingStudents([73, 67, 38, 33]));
