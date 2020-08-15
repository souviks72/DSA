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
    let s = userInput[0];
    let sum = 0;
    for(let i=0;i<s.length;i++)
        sum += s.charCodeAt(i);
    if(sum%8===0)
        console.log(1);
    else
        console.log(0);
});