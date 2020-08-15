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
    let str = userInput[0];
    let digits = '0123456789';
    let sum = 0,t="";
    for(let i=0;i<str.length;i++){
        let ch = str.charAt(i);
        if(digits.indexOf(ch)>=0){
            sum += parseInt(ch);
        }else{
            t+=ch;
        }
    }
    console.log(`${t}${sum}`);
});