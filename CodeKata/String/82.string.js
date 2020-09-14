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
    k = parseInt(k);
    let ans = [];
    for(let i=0;i<s.length-k+1;i++){
        let t = s.substring(i,i+k);
        ans.push(t);
    }
    console.log(ans.join(' '));
});