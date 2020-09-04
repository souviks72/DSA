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
    let s = userInput[0].split(' ');
    let ans = [];
    for(let i=0;i<s.length;i++){
        let x = s[i];
        x = x.split('').reverse().join('');
        ans.push(x);
    }
    console.log(ans.join(' '));
});