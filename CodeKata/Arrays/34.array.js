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
    let [n,k] = userInput[0].split(' ').map(a => +a);
    let arr = userInput[1].split(' ').map(a => +a);
    
    for(let i=0;i<k;i++){
        arr = [...arr.slice(n-1),...arr.slice(0,n-1)];
    }
    
    console.log(arr.join(' '));
});