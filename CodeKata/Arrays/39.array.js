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
    let [n,k] = userInput[0].split(' ');
    let arr = userInput[1].split(' ').join('');
    let x = arr.indexOf(k);
    if(x===-1)
        console.log(-1);
    else
    console.log(x+1);
});