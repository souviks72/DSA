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
    let brr = userInput[2].split(' ').map(a => +a);
    
    let xrr = [];
    for(let i=0;i<n;i++){
        xrr.push([arr[i],brr[i]]);
    }
    xrr.sort((a,b)=> a[1] - b[1]);
    let ans = [];
    for(let i=0;i<n;i++){
        ans.push(xrr[i][0]);
    }
    console.log(ans.join(' '));
    
});