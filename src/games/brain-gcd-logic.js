import { name } from "../cli.js";
import readlineSync from "readline-sync";
import { isNumericAnswerCorrect } from "../index.js";

function gcd_rec(a, b) {
  if (b) {
    return gcd_rec(b, a % b);
  } else {
    return Math.abs(a);
  }
}

function brainGcd() {
  let counter = 0;
  let answer;
  let number1;
  let number2;
  let characterName;
  characterName = name;
  let correctAnswer;
  console.log("Find the greatest common divisor of given numbers.");
  while (counter < 3) {
    number1 = Math.round(Math.random() * 100) + 1;
    number2 = Math.round(Math.random() * 100) + 1;
    answer = readlineSync.question(
      "Question: " + number1 + " & " + number2 + " ",
    );
    correctAnswer = gcd_rec(number1, number2);
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
export { brainGcd as default };
