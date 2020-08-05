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
  //start-here
  //Your code goes here … replace the below line with your code logic 

    let [m,n] = userInput[0].split(' ').map(a => +a);
    let arr = [];
    for(let i=0;i<m;i++){
        let ar = userInput[i+1].split(' ').map(a=> +a);
        arr.push(ar);
    }
    let sum = 0;
    arr.forEach(ar=>{
        let s = ar.reduce((acc,next)=>{return acc+next},0);
        sum+=s;
    });
    
    let ram = (m*n) - sum;
    let sita = sum;
    console.log(`RAM: ${ram}`);
    console.log(`SITA: ${sita}`);
  //end-here
});