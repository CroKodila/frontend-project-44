import { question } from "readline-sync";
import { engine } from "../index.js";

function brainCalc() {
  let number1 = [];
  let number2 = [];
  let operationCode = [];
  let correctAnswers = [];
  let task = "What is the result of the expression?";
  let gameQuestions = [];
  for (let i = 0; i < 3; i += 1) {
    operationCode[i] = Math.round(Math.random() * 3);
    number1[i] = Math.round(Math.random() * 10);
    number2[i] = Math.round(Math.random() * 10);
    if (operationCode[i] === 1) {
      correctAnswers[i] = number1[i] + number2[i];
      sign = " + "
    } else if (operationCode[i] === 2) {
      correctAnswers[i] = number1[i] - number2[i];
      sign = " - "
    } else {
      correctAnswers[i] = number1[i] * number2[i];
      sign = " * "
    }
    gameQuestions[i] = "Question: " +
    number1[i].toString() +
    sign +
    number2[i].toString() +
    " ";
  }
  engine(task, correctAnswers, gameQuestions);
}
export { brainCalc as default };
