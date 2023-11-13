import { name } from "../cli.js";
import readlineSync from "readline-sync";
import { isNonNumericAnswerCorrect } from "../index.js";

function brainEven() {
  let counter = 0;
  let answer;
  let number;
  let characterName;
  characterName = name;
  let correctAnswer;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (counter < 3) {
    number = Math.round(Math.random() * 100);
    answer = readlineSync.question("Question: " + number + " ");
    if (number % 2 === 0) {
      correctAnswer = "yes";
    } else {
      correctAnswer = "no";
    }
    counter = isNonNumericAnswerCorrect(
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
export { brainEven as default };
