import {
  engine
} from "../index.js";

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
  let number = [];
  let correctAnswers = [];
  let gameQuestions = [];
  let task = 'Answer "yes" if given number is prime, otherwise answer "no".';
  for(let i= 0; i<3;i+=1) {
    number[i] = Math.ceil(Math.random() * 100);
    correctAnswers[i] = isPrime(number[i]);
    gameQuestions[i] = "Question: " + number[i] + " ";
  }
  engine(task,correctAnswers,gameQuestions);
}
export { brainPrime as default };
