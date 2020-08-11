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
    
    if(n<6){
        console.log(0);
    }else{
        let a = 0,b=0,ans = 0;
        for(let i=0;i<3;i++)
            a+=arr[i];
        for(let i=n-1;i>=n-3;i--)
            b+=arr[i];
        ans = a===b? 1:0;
        console.log(ans);
    }
});