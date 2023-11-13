import { name } from "./cli.js";
import readlineSync from "readline-sync";

function brainCalc() {
  let counter = 0;
  let answer;
  let number1;
  let number2;
  let operationCode;
  let characterName;
  characterName = name;
  let correctAnswer;
  console.log("What is the result of the expression?");
  while (counter < 3) {
    operationCode = Math.round(Math.random() * 3);
    number1 = Math.round(Math.random() * 10);
    number2 = Math.round(Math.random() * 10);
    if (operationCode <= 1) {
      answer = readlineSync.question(
        "Question: " + number1 + " + " + number2 + " ",
      );
      correctAnswer = number1 + number2;
    } else if (operationCode === 2) {
      answer = readlineSync.question(
        "Question: " + number1 + " - " + number2 + " ",
      );
      correctAnswer = number1 - number2;
    } else if (operationCode >= 3) {
      answer = readlineSync.question(
        "Question: " + number1 + " * " + number2 + " ",
      );
      correctAnswer = number1 * number2;
    }

    if (Number(answer) === correctAnswer) {
      counter += 1;
      console.log("Correct!");
    } else {
      console.log(
        answer +
          " is wrong answer ;(. Correct answer was " +
          correctAnswer +
          ". Let's try again, " +
          characterName +
          "!",
      );
      break;
    }
    if (counter === 3) {
      console.log("Congratulations, " + characterName + "!");
      break;
    }
  }
}
export { brainCalc as default };
