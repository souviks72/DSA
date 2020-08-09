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
    let [m,n] = userInput[0].split(' ').map(a => +a);
    let ar1 = userInput[1].split(' ').map(a => +a);
    let ar2 = userInput[2].split(' ').map(a => +a);
    
    ar1.sort((a,b)=>  a-b);
    ar2.sort((a,b)=> b-a);
    
    let ans = ar1.concat(ar2);
    console.log(ans.join(' '));
    
});