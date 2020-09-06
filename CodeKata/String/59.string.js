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
    t = +t;
    s = s.split('').map(a => +a);
    s = [... new Set(s)];
    s.sort((a,b) => a - b);
    if(s[s.length-1]==t && s.length === t+1)
        console.log("yes");
    else
        console.log("no");
});