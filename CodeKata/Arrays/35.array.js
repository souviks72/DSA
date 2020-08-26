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
    let arr = [];
    c = 1;
    for(let i=0;i<n;i++){
        for(let j=1;j<=c;j++){
            arr.push(1);
        }
        ans.push(arr);
        arr = [];
        c += 2;
    }
    
    for(let i=0;i<n;i++){
        console.log(ans[i].join(' '));
    }
});