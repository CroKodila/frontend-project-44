import readlineSync from 'readline-sync';

function hello(){
    const name = readlineSync.question('May I have your name? ');
    console.log("Hello, " + name + "!");
}

export {hello as default};
