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
    
    for(let i=0;i<n;i++){
        if(arr[i]<n)
            ans.push(arr[i]);
    }
    if(ans.length===0)
        console.log(-1)
    else{
        ans.sort((a,b)=> b-a);
        console.log(ans.join(' '));
    }
});