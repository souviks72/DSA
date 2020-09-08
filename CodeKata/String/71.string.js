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
    let [s,t] = userInput[0].split(' ');
    if(s===t)
        console.log("D");
    else if(s==="P" && t ==="R" || t==="P" && s ==="R")
        console.log("P");
    else if(s==="S" && t==="P" || t==="S" && s==="P")
        console.log("S");
    else
        console.log("R");
});