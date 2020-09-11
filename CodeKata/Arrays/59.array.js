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
    let ans = [];
    while(n%2===0){
        ans.push(2);
        n= Math.floor(n/2);
    }
    for(let i=3;i<=Math.sqrt(n);i+=2){
        while(n%i===0){
            ans.push(i);
            n=Math.floor(n/i);
        }
    }
    if(n>2){
        ans.push(n);
    }
    ans = [...new Set(ans)];
    ans.sort((a,b)=> a-b);
    console.log(ans.join(' '));
});