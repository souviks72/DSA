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
    let n = userInput[0].split('').map(a=>+a);
    n.sort((a,b)=> b-a);
    n = n.join('');
    console.log(n);
});