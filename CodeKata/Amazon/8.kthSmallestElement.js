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
    let [n,k] = userInput[0].split(' ').map(a => +a);
    let arr = userInput[1].split(' ').map(a => +a);
    
    let s = new Set(arr);
    let t = Array.from(s);
    
    if(t.length<k)
        console.log(-1);
    else
        console.log(t[k-1]);
});