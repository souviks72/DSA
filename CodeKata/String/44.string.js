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
    let a = "GUVI";
    let b = "GEEK";
    
    let x = s.indexOf(a);
    let y = s.indexOf(b);
    
    if(x===-1 || y===-1)
        console.log("no");
    else
        console.log("yes");
});