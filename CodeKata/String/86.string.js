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
    let t = "";
    for(let i=0;i<s.length;i++){
        let ch = s.charAt(i);
        if(s.indexOf(ch)===s.lastIndexOf(ch))
            t += ch;
    }
    console.log(t);
});