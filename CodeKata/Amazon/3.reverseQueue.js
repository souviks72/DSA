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
    let n = userInput[0];
    let q = userInput[1].split(' ').map(a => +a);
    
    let stack = [];
    for(let i=0;i<n;i++){
        stack.unshift(q[i]);
    }
    
    console.log(stack.join(' '));
});