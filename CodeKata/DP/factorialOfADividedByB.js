// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let [a,b] = userInput[0].split(' ').map(a => +a);
    let fact = 1;
    for(let i=a;i>b;i--){
        fact = fact*i;
    }
    console.log(fact);
});