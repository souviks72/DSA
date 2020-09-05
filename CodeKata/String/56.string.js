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
    let [s,ch] = userInput[0].split(' ');
    let c= 0;
    for(let i=0;i<s.length;i++){
        if(ch === s.charAt(i))
            c++;
    }
    if(c===0)
        console.log(-1);
    else
    console.log(c);
});