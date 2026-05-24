const questions = [
  {
    category: "A",
    question: "string is a primitive type",
    choices: ["yes", "no", "none"],
    answer: "yes"
  },
  {
    category: "B",
    question: "God made man",
    choices: ["no", "yes", "maybe"],
    answer: "yes"
  },
  {
    category: "C",
    question: "Lying is good",
    choices: ["yes", "no", "none"],
    answer: "no"
  },
  {
    category: "D",
    question: "What is 7 * 7",
    choices: ["49", "58", "30"],
    answer: "49"
  },
  {
    category: "E",
    question: "What is 80 / 10",
    choices: ["5", "7", "none"],
    answer: "none"
  }
];

function getRandomQuestion (arr) {
  return arr[(Math.floor(Math.random() * arr.length))]
}

function getRandomComputerChoice (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getResults (question, answer) {
  if (answer === question.answer) {
    return "The computer's choice is correct!";
  }
  else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
