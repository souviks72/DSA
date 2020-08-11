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
    let [n,k] = userInput[0].split(' ').map(a => +a);
    let arr = userInput[1].split(' ').map(a => +a);
    
    let x = arr.indexOf(k);
    if(x===-1)
        console.log(-1);
    else{
        let arrx = arr.filter(a => a===k);
        console.log(arrx.length-1);
    }
});