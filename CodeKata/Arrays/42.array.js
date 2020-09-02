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
    
    let ans = [];
    for(let i=0;i<n-1;i++){
        ans.push(Math.max(arr[i],arr[i+1]));
    }
    console.log(ans.join(' '));
});