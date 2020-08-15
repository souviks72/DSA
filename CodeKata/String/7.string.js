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
        if(t.indexOf(s.charAt(i))===-1)
            t+=s.charAt(i);
    }
    if(t.length===3)
        console.log('Wonder');
    else
        console.log(-1)
});