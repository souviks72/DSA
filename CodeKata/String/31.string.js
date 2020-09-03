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
    let s = userInput[0];
    let n = "0987654321";
    let flag=0;
    for(let i=0;i<s.length;i++){
        let ch = s.charAt(i);
        if(n.indexOf(ch)===-1){
            flag=1;
            break;
        }
    }
    if(flag===1)
        console.log("no");
    else
        console.log("yes");
});