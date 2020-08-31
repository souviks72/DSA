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
    if(s === 'sunday' || s === 'saturday'){
        console.log("yes");
    }else{
        console.log("no");
    }
});