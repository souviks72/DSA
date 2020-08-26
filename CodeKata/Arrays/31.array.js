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
    let arr = userInput[1].split(' ').map(function(a){
        if(a)
            return +a
        
    });
    
    let ans = arr.filter(a => a < k);
    if(ans.length===0)
        console.log(-1);
    else{
        ans.sort((a,b) => a-b);
        console.log(ans.join(' '));
    }
    
});