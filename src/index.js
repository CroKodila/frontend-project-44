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

export { isNumericAnswerCorrect, isNonNumericAnswerCorrect };
