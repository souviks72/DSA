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
    let sum = 0;
    let digits = '0123456789';
    for(let i=0;i<s.length;i++){
        let ch = s.charAt(i);
        if(digits.indexOf(ch)>=0){
            sum += parseInt(ch);
        }
    }
    console.log(sum);
});