import { engine } from '../index.js';

export default function brainEven() {
  const number = [];
  const correctAnswers = [];
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameQuestions = [];
  for (let i = 0; i < 3; i += 1) {
    number[i] = Math.round(Math.random() * 100);
    gameQuestions[i] = `Question: ${number[i]}`;
    if (number[i] % 2 === 0) {
      correctAnswers[i] = 'yes';
    } else {
      correctAnswers[i] = 'no';
    }
  }
  engine(task, correctAnswers, gameQuestions);
}
