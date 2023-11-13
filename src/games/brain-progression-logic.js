import { name } from "../cli.js";
import readlineSync from "readline-sync";
import process from "process";

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
export { brainProgression as default };
