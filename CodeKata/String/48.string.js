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
    let n = s.length;
    for(let i=1;i<n-1;i++){
        let t = s[i];
        t = t.split('').reverse().join('');
        ans.push(t);
    }
    ans.unshift(s[0]);
    ans.push(s[n-1]);
    console.log(ans.join(' '));
});