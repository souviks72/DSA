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
    let t = userInput[1];
    let x = s.indexOf(t);
    if(x===-1)
        console.log(s);
    else{
        let xt = s.substring(0,x) + s.substring(x+t.length);
        console.log(xt.trim());
    }
});