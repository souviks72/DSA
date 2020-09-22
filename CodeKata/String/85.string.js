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
    let [s,t] = userInput[0].split(' ');
    s=s.split('');
    t=t.split('');
    s = [...new Set(s)].sort().join('');
    t = [...new Set(t)].sort().join('');
    
    console.log(s===t);
});