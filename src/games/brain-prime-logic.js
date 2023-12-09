import { name } from "../cli.js";
import readlineSync from "readline-sync";
import { isNonNumericAnswerCorrect } from "../index.js";

function isPrime(num) {
  let c = 0;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      c += 1;
    }
  }
  if (c === 0) {
    return "yes";
  } else {
    return "no";
  }
}

function brainPrime() {
  greeting();
  let counter = 0;
  let answer, number, characterName, correctAnswer;
  characterName = name;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (counter < 3) {
    number = Math.ceil(Math.random() * 100);
    correctAnswer = isPrime(number);
    console.log("Question: " + number);
    answer = readlineSync.question("Your answer: ");
    counter = isNonNumericAnswerCorrect(
      answer,
      counter,
      correctAnswer,
      characterName,
    );
    if (counter === 3) {
      congrats(characterName);
      break;
    }
  }
}
export { brainPrime as default };
