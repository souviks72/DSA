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
    let arr = userInput[0].split('').map(a => +a);
    let sum = 0,n=arr.length;
    for(let i=0;i<n;i++){
        sum += Math.pow(arr[i],n);
    }
    console.log(sum);
});