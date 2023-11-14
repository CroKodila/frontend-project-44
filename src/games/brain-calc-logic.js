import { name } from "../cli.js";
import readlineSync from "readline-sync";
import { isNumericAnswerCorrect, chooseSignAtCalcQuestion, correctAnswerAtCalc } from "../index.js";

function brainCalc() {
  let counter = 0;
  let answer, number1, number2, operationCode, characterName, correctAnswer;
  characterName = name;
  console.log("What is the result of the expression?");
  while (counter < 3) {
    operationCode = Math.round(Math.random() * 3);
    number1 = Math.round(Math.random() * 10);
    number2 = Math.round(Math.random() * 10);
    answer = readlineSync.question("Question: " + number1 + " " + chooseSignAtCalcQuestion(operationCode) + " " + number2 + " ");
    correctAnswer = correctAnswerAtCalc(chooseSignAtCalcQuestion(operationCode), number1, number2);
    counter = isNumericAnswerCorrect(
      answer,
      counter,
      correctAnswer,
      characterName,
    );
    if (counter === 3) {
      console.log("Congratulations, " + characterName + "!");
      break;
    }
  }
}
export { brainCalc as default };
