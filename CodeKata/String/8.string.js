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
    let v = 'aeiou';
    let flag = 0;
    for(let i=0;i<5;i++){
        if(s.indexOf(v.charAt(i))>=0){
            flag=1;
            break;
        }
    }
    if(flag===1)
        console.log("yes");
    else
        console.log("no");
});