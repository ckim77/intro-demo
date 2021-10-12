const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question('Hello, what is your name?', function(answer) {
    console.log('Hi ' + answer);
});


const firstname = "Chris";
const lastname = "Kim";
const age = 28;


// let x = 4;
// let y = 100;
// let z = 23;

// let sum = x + y + z;

// console.log(sum)

const greeting = "Hello, my name is ";

// console.log(greeting)