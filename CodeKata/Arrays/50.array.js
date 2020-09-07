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
    let c=1,x=-1;
    let ans = [], flag=0;
    while(c<=n){
        ans.push(userInput[c++]);
        x++;
        if(c>1 && ans[x]===ans[x-1]){
            flag=1;
        }
    }
    if(flag===1)
        console.log("yes");
    else
        console.log("no");
});