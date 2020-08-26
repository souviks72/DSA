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
    let [s,t] = userInput[0].split(' ');
    
    let a = isPal(s);
    let b = isPal(t);
    if(a===1 && b===1 && isAn(s,t)===1)
        console.log(1);
    else
        console.log(0);
});

function isPal(s){
    let x = s.split('').reverse().join('');
    if(x===s)
        return 1;
    return 0;
}