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
    let [m,n] = userInput[0].split(' ').map(a => +a);
    let arr = userInput[1].split(' ').map(a => +a);
    console.log(arr.indexOf(n));
});