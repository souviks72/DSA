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
    let flag=0;
    s = [...new Set(s)].join('');
    if(s.length===2){
        if(s.indexOf('a') >-1 && s.indexOf('b')>-1){
            console.log("yes");
        }else{
            console.log("no");
        }
    }else if(s.length===1){
        if(s.indexOf('a')===0 || s.indexOf('b')===0)
            console.log("yes");
        else
            console.log("no");
    }else
        console.log("no");
});