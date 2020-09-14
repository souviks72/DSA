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
    let arr = userInput[1].split(' ');
    let s = userInput[2];
    let c=0;
    for(let i=0;i<n;i++){
        if(arr[i].indexOf(s)===0)
            c++;
    }
    console.log(c);
});