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
    let brr = userInput[2].split(' ').map(a => +a);
    
    let flag=0,c=n-1;
    for(let i=0;i<n;i++,c--){
        if(arr[i]!==brr[c]){
            flag=1;
            break;
        }
    }
    if(flag===1)
        console.log("no");
    else
        console.log("yes");
});