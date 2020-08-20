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
    let t = userInput[1].split('');
    
    s=s.sort();
    t=t.sort();
    s=s.join('');
    t=t.join('');
    if(s===t)
        console.log(1);
    else
        console.log(0);
});