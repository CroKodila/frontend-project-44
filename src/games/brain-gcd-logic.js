import engine from '../index.js';

function gcdRec(a, b) {
  let res;
  if (b) { res = gcdRec(b, a % b); } 
  else { res = Math.abs(a); }
  return res;
}
export default function brainGcd() {
  const number1 = [];
  const number2 = [];
  const correctAnswers = [];
  const task = 'Find the greatest common divisor of given numbers.';
  const gameQuestions = [];

  for (let i = 0; i < 3; i += 1) {
    number1[i] = Math.round(Math.random() * 100) + 1;
    number2[i] = Math.round(Math.random() * 100) + 1;
    gameQuestions[i] = `Question: ${number1[i]} ${number2[i]} `;
    correctAnswers[i] = gcdRec(number1[i], number2[i]);
  }
  engine(task, correctAnswers, gameQuestions);
}