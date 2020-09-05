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
    let arr = userInput[0].split(' ');
    let ans = [];
    for(let i=0;i<arr.length;i++){
        let s = arr[i];
        s  = s.toLowerCase();
        s = (s.substring(0,1)).toUpperCase() + s.substring(1);
        ans.push(s);
    }
    console.log(ans.join(''));
});