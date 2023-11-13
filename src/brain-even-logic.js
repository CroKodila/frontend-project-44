import { name } from "./cli.js";
import readlineSync from "readline-sync";

function brainEven() {
  let counter = 0;
  let answer;
  let number;
  let characterName;
  characterName = name;
  let correctAnswer;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (true) {
    number = Math.round(Math.random() * 100);
    answer = readlineSync.question("Question: " + number + " ");
    if (number % 2 === 0) {
      correctAnswer = "yes";
    } else {
      correctAnswer = "no";
    }
    if (answer === correctAnswer) {
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
export { brainEven as default };
