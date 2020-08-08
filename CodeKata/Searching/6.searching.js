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
    let n = +userInput[0];
    let ar1 = userInput[1].split(' ').map(a => +a);
    let m = +userInput[2];
    let ar2 = userInput[3].split(' ').map(a => +a);
    
    let a = ar2.every(el => ar1.indexOf(el)!==-1)
    if(a===true)
        console.log("yes");
    else
        console.log("no");
});