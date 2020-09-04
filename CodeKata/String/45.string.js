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
    
    let n=0;
    for(let i=0;i<arr.length;i++){
        n += arr[i]*arr[i];
    }
    console.log(n);
});