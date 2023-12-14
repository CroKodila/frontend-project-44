import engine from '../index.js';

function isPrime(num) {
  let c = 0;
  let res;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      c += 1;
    }
  }
  if (c === 0) {
    res = 'yes';
  } else {
    res = 'no';
  }
  return res;
}
export default function brainPrime() {
  const number = [];
  const correctAnswers = [];
  const gameQuestions = [];
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  for (let i = 0; i < 3; i += 1) {
    number[i] = Math.ceil(Math.random() * 100);
    correctAnswers[i] = isPrime(number[i]);
    gameQuestions[i] = `Question: ${number[i]} `;
  }
  engine(task, correctAnswers, gameQuestions);
}
