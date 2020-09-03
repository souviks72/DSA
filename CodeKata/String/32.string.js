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
    let n = userInput[0];
    let flag=0;
    for(let i=0;i<n.length;i++){
        let ch = n.charAt(i);
        if(n.indexOf(ch)!==n.lastIndexOf(ch)){
            flag=1;
            break;
        }
    }
    if(flag===1)
        console.log("yes");
    else
        console.log("no")
});