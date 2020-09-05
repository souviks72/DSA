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
    
    let sum = arr.reduce((a,b) => a+b,0)
    let ans = [sum];
    for(let i=1;i<n;i++){
        ans.push(ans[i-1] -arr[i-1]);
    }
    console.log(ans.join(' '))
});