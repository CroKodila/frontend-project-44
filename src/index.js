import readlineSync from 'readline-sync';

function engine(task, correctAnswers, gameQuestions) {
  let counter = 0;
  let answer;
  console.log('Welcome to the Brain Games!');
  const characterName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${characterName}!`);
  console.log(task);
  while (counter < 3) {
    answer = readlineSync.question(`${gameQuestions[counter]}\nYour answer `);
    if (answer === correctAnswers[counter].toString()) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswers[counter]}. Let's try again, ${characterName}!`);
      counter = 4;
    }
    if (counter === 3) {
      console.log(`Congratulations, ${characterName}!`);
    }
  }
}
export {engine as default};