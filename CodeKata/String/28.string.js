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
    let s = userInput[0].split('');
    let t = [...new Set(s)];
    if(t.length===3 && s.length===3)
        console.log(1);
    else
        console.log(0);
});