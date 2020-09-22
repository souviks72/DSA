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
        let word = arr[i].split('').reverse().join('');
        ans.push(word);
    }
    console.log(ans.join(' '));
});