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
    
    let str = "";
    for(let i=0;i<s.length;i++){
        let ch = s.charAt(i);
        if(s.indexOf(ch)===i && s.lastIndexOf(ch)===i)
            str += ch;
    }
    console.log(str);
});