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
    let n = s.length,t="";
    let m = Math.floor(n/2);
    if(n%2===1){
        t = s.substring(0,m)+'*'+s.substring(m+1);
        
    }else{
        t = s.substring(0,m-1)+'**'+s.substring(m+1);
    }
    console.log(t);
});