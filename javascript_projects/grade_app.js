function getAverage(array) {
  let scoreSum = 0;

  for (let score of array) {
    scoreSum += score;
  }

  return scoreSum / array.length;
}

function getGrade(score) {
  if (score >= 100) return "A+";
  else if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(array, score) {
  const avg = getAverage(array);
  const grade = getGrade(score);
  const passed = grade !== "F";

  if (passed) {
    return `Class average: ${avg}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${avg}. Your grade: ${grade}. You failed the course.`;
  }
}
