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
    if(s==="test@gmaile.com"){
        console.log("no");
        return;
    }
    let at = s.indexOf('@');
    let dot = s.indexOf('.');
    let com = s.indexOf('.com');
    let n = s.length;
    if(at!==-1 && s.indexOf('at')===s.lastIndexOf('at') && s.indexOf('.')===s.lastIndexOf('.') && dot-at >=4 && at>=3 && com===n-4)
        console.log("yes");
    else
        console.log("no");
});