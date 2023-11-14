import { main } from "../bin/brain-games";
main();

function isNumericAnswerCorrect(answer, counter, correctAnswer, characterName) {
  if (Number(answer) === correctAnswer) {
    counter += 1;
    console.log("Correct!");
  } else {
    counter = 4;
    console.log(
      answer +
        " is wrong answer ;(. Correct answer was " +
        correctAnswer +
        ". Let's try again, " +
        characterName +
        "!",
    );
  }
  return counter;
}

function isNonNumericAnswerCorrect(
  answer,
  counter,
  correctAnswer,
  characterName,
) {
  if (answer === correctAnswer) {
    counter += 1;
    console.log("Correct!");
  } else {
    counter = 4;
    console.log(
      answer +
        " is wrong answer ;(. Correct answer was " +
        correctAnswer +
        ". Let's try again, " +
        characterName +
        "!",
    );
  }
  return counter;
}

function chooseSignAtCalcQuestion(operationCode) {
  if (operationCode <= 1) {
    return "+";
  } else if (operationCode === 2) {
    return "-";
  } else {
    return "*";
  }
}

function correctAnswerAtCalc(sign, number1, number2) {
  if (sign === "+") {
    return number1 + number2;
  } else if (sign === "-") {
    return number1 - number2;
  } else {
    return number1 * number2;
  }
}
export {
  isNumericAnswerCorrect,
  isNonNumericAnswerCorrect,
  chooseSignAtCalcQuestion,
  correctAnswerAtCalc,
};
