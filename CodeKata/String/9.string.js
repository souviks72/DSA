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
    let str = userInput[0].split(' ');
    let s = userInput[1];
    let c = 0;
    for(let i=0;i<str.length;i++){
        if(str[i]===s)
            c++;
    }
    if(c===0)
        console.log(-1);
    else
        console.log(c);
});