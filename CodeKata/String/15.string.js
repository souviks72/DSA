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
    let c = 0,i=0;
    s+='%';
    while(s.charAt(i)!=='%'){
        i++;
        c++;
    }
    console.log(c);
});