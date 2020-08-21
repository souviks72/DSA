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
    let t="",st="";
    for(let i=0;i<s.length;i++){
        if(i%2===0)
            t += s.charAt(i);
        else
            st += s.charAt(i);
    }
    console.log(`${t} ${st}`);
});