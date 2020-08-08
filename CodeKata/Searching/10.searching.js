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
    let  T = +userInput[0];
   
    for(let x =0;x<T;x++){
        let n = +userInput[x+1];
        let ar1 = userInput[x+2].split(' ').map(a => +a);
        let ar2 = userInput[x+3].split(' ').map(a => +a);
        let sum1 = ar1.reduce((acc,next)=>{ return acc+next},0);
        let sum2 = ar2.reduce((acc,next)=>{ return acc+next},0);
        let y = sum1 - sum2;
        console.log(ar1.indexOf(y));
    }
    
});