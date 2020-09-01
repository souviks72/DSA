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
    let s = userInput[0].split('');
    for(let i=0;i<s.length;i=i+2){
        let a = s[i];
        let b = s[i+1];
        s[i] = b;
        s[i+1] = a;
    }
    console.log(s.join(''))
});