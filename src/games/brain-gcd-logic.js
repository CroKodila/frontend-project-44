import {
  engine
} from "../index.js";

function gcd_rec(a, b) {
  if (b) {
    return gcd_rec(b, a % b);
  } else {
    return Math.abs(a);
  }
}

function brainGcd() {
  let number1 = [];
  let number2 = [];
  let correctAnswers = [];
  let task = "Find the greatest common divisor of given numbers.";
  let gameQuestions = [];

  for(let i=0; i<3;i+=1) {
    number1[i] = Math.round(Math.random() * 100) + 1;
    number2[i] = Math.round(Math.random() * 100) + 1;
    gameQuestions[i] = "Question: " + number1[i] + " & " + number2[i] + " ";
    correctAnswers[i] = gcd_rec(number1[i], number2[i]);
    
  }
  engine(task, correctAnswers, gameQuestions);
}
export { brainGcd as default };
