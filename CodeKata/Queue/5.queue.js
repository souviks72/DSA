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
    let s = userInput[0].split(' ');
    let x = userInput[1];
    let p=-1;
    for(let i=0;i<s.length;i++){
        if(s[i]===x){
            p = i+1;
            break;
        }
    }
    if(p===-1)
        console.log(-1);
    else
        console.log(p);
});