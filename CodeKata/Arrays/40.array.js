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
    let [s,k] = userInput[0].split(' ');
    let c=0;
    for(let i=0;i<s.length;i++){
        if(s.charAt(i)==k)
            c++;
    }
    if(c===0)
        console.log(-1);
    else
        console.log(c);
});