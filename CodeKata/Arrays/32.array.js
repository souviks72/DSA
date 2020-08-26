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
    let arr = userInput[1].split(' ').map(a => +a);
    arr = new Set(arr);
    arr = Array.from(arr);
    n = arr.length;
    let x = 100000, y=1000000;
    for(let i=0;i<n;i++){
        let a = arr[i];
        
        if(a<x){
            y = x;
            x = a;
        }else if(a<y){
            y = a;
        }
    }
    if(n>=2)
        console.log(y);
    else
        console.log(-1);
});