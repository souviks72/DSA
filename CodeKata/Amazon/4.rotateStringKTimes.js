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
    let [s,n] = userInput[0].split(' ');
    n = parseInt(n);
    let l = s.length;
    for(let i = 0;i<n;i++){
        s = s.substring(l-1) + s.substring(-1,l-1);
    }
    console.log(s);
});