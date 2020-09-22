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
        ans.push([arr[i],i])
    }
    ans.sort((a,b)=> a[0] - b[0]);
    let t = [];
    for(let i=0;i<n;i++){
        t.push(ans[i][1]+1);
    }
    console.log(t.join(' '));
});