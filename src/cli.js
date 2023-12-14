import readlineSync from "readline-sync";
export var name = "";

function hello() {
  name = readlineSync.question("May I have your name? ");
  console.log("Hello, " + name + "!");
}

export { hello as default };
