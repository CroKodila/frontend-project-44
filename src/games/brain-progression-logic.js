import { name } from "../cli.js";
import readlineSync from "readline-sync";
import process from "process";
import { isNumericAnswerCorrect } from "../index.js";

function brainProgression() {
  let counter = 0;
  let answer;
  let progression = [];
  let delimiter;
  let position;
  let characterName;
  characterName = name;
  let correctAnswer;
  console.log("What is the result of the expression?");
  while (counter < 3) {
    delimiter = Math.ceil(Math.random() * 10);
    position = Math.round(Math.random() * 9);
    progression[0] = Math.round(Math.random() * 10);
    for (let i = 1; i < 10; i += 1) {
      progression[i] = progression[i - 1] + delimiter;
    }
    correctAnswer = progression[position];
    process.stdout.write("Question: ");
    for (let i = 0; i < 10; i += 1) {
      if (i !== position) {
        process.stdout.write(progression[i] + " ");
      } else {
        process.stdout.write(".. ");
      }
    }
    answer = readlineSync.question("\nYour answer: ");
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
export { brainProgression as default };
