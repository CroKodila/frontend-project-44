import { engine } from '../index.js';

export default function brainProgression() {
  const delimiter = [];
  const position = [];
  const correctAnswers = [];
  const task = 'What number is missing in the progression?';
  const gameQuestions = [];
  const progressions = [[], [], []];
  for (let i = 0; i < 3; i += 1) {
    delimiter[i] = Math.ceil(Math.random() * 10);
    position[i] = Math.round(Math.random() * 9);
    progressions[i][0] = Math.round(Math.random() * 10);
    for (let k = 1; k < 10; k += 1) {
      progressions[i][k] = progressions[i][k - 1] + delimiter[i];
    }
    correctAnswers[i] = progressions[i][position[i]];
    gameQuestions[i] = 'Question: ';
    for (let k = 0; k < 10; k += 1) {
      if (k !== position[i]) {
        gameQuestions[i] = `${gameQuestions[i]} ${progressions[i][k]} `;
      } else {
        gameQuestions[i] = `${gameQuestions[i]}.. `;
      }
    }
  }
  engine(task, correctAnswers, gameQuestions);
}
