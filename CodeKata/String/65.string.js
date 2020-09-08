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
    let c=1,ans=[];
    while(c<=n){
        ans.push(userInput[c++]);
    }
    ans.sort();
    console.log(ans[0]);
});