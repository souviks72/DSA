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
    let s = +userInput[0];
    console.log(util(s));
});

function util(x){
    let ans="";
    while(x!==0){
        if(x%2===0)
            ans = "0"+ans;
        else
            ans = "1" + ans;
        x=Math.floor(x/2);
    }
    return ans;
}