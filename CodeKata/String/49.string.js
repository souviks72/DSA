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
    let arr = [];
    for(let i=0;i<256;i++)
        arr[i] = 0;
    for(let i=0;i<s.length;i++){
        arr[s.charCodeAt(i)]++;
    }
    
    console.log(Math.max.apply(this,arr));
});